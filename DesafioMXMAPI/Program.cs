using Microsoft.EntityFrameworkCore;
using DataAcess.Data;
using DesafioMXMAPI.Services;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;


var builder = WebApplication.CreateBuilder(args);
var service = builder.Services;

service.AddControllers();

builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        options.Authority = "https://localhost:5443";
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateAudience = true,
            ValidAudience = "DesafioMXMAPI"
        };
    });

service.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

service.AddScoped<ICoffeeShopService, CoffeeShopService>();

service.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
             .AllowAnyMethod()
             .AllowAnyHeader()));

var app = builder.Build();

app.UseCors("AllowAll");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
