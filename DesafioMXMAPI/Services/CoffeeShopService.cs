using DataAcess.Data;
using DesafioMXMAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DesafioMXMAPI.Services;

public class CoffeeShopService : ICoffeeShopService
{

    private readonly ApplicationDbContext _dbContext;

    public CoffeeShopService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<CoffeeShopModel>> List()
    {
        var coffeeShops = await (from shop in _dbContext.CoffeeShops
                                 select new CoffeeShopModel()
                                 {
                                     Id = shop.Id,
                                     Name = shop.Name,
                                     OpeningHours = shop.OpeningHours,
                                     Adress = shop.Adress
                                 }).ToListAsync();
        return coffeeShops;
    }
}
