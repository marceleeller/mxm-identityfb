using Microsoft.EntityFrameworkCore;
using DataAcess.Data;
using DesafioMXMAPI.Services;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;
using Microsoft.OpenApi.Models;


var builder = WebApplication.CreateBuilder(args);
var service = builder.Services;

service.AddControllers();

service.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "DesafioMXM API", Version = "v1" });
});

builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        options.Authority = builder.Configuration["AuthorityUrl"];
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

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
});

app.UseCors("AllowAll");

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
