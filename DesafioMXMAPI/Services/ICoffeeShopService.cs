using DesafioMXMAPI.Models;

namespace DesafioMXMAPI.Services;

public interface ICoffeeShopService
{

    Task<List<CoffeeShopModel>> List();
}
