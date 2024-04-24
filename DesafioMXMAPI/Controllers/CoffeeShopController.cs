using DesafioMXMAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DesafioMXMAPI.Controllers;

[Route("api/coffeeshop")]
[ApiController]
[Authorize]
public class CoffeeShopController : ControllerBase
{
    private readonly ICoffeeShopService _coffeeShopService;
    
    public CoffeeShopController(ICoffeeShopService coffeeShopService)
    {
        _coffeeShopService = coffeeShopService;
    }

    [HttpGet]
    public async Task<IActionResult> List()
    {
        var coffeeShops = await _coffeeShopService.List();
        return Ok(coffeeShops);
    }
}
