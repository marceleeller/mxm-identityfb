using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Server;
using Server.Data;

var seed = args.Contains("/seed");
if (seed)
{
    args = args.Except(new[] { "/seed" }).ToArray();
}

var builder = WebApplication.CreateBuilder(args);

var assembly = typeof(Program).Assembly.GetName().Name;
var defaultConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var service = builder.Services;

if (seed)
{
    SeedData.EnsureSeedData(defaultConnectionString);
}

service.AddDbContext<AspNetIdentityDbContext>(options =>
{
    options.UseSqlServer(defaultConnectionString, 
        b => b.MigrationsAssembly(assembly));
}); 

service.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<AspNetIdentityDbContext>();

// identity server configuration
service.AddIdentityServer()
    .AddAspNetIdentity<IdentityUser>()
    .AddConfigurationStore(options =>
    {
        options.ConfigureDbContext = b =>
        b.UseSqlServer(defaultConnectionString,
                       opt => opt.MigrationsAssembly(assembly));
    })
    .AddOperationalStore(options =>
    {
        options.ConfigureDbContext = b =>
        b.UseSqlServer(defaultConnectionString, opt => opt.MigrationsAssembly(assembly));
    })
    .AddDeveloperSigningCredential();


var app = builder.Build();

app.UseIdentityServer();

app.Run();
