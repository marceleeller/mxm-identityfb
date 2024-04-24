using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAcess.Migrations
{
    public partial class AddCoffeeShops : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Starbucks', 'Segunda a Domingo: 08:00 - 22:00', 'Av. Paulista, 1234')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Coffee Lab', 'Segunda a Sábado: 09:00 - 20:00', 'Rua Fradique Coutinho, 1340')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Octavio Café', 'Segunda a Sábado: 08:00 - 22:00', 'Av. Brigadeiro Faria Lima, 2996')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Suplicy Cafés Especiais', 'Segunda a Sábado: 08:00 - 22:00', 'Rua Fradique Coutinho, 1443')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Urbe Café Bar', 'Segunda a Sábado: 09:00 - 21:00', 'Rua Antônio Carlos, 404')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Isso é Café', 'Segunda a Sábado: 10:00 - 20:00', 'Rua Augusta, 1931')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Café Girondino', 'Segunda a Sexta: 07:00 - 19:00', 'Praça Antonio Prado, 9')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Benzina Café', 'Segunda a Sexta: 08:00 - 20:00', 'Rua Padre Garcia Velho, 60')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Café Secreto', 'Segunda a Sexta: 09:00 - 20:00', 'Rua Fradique Coutinho, 1010')");
            migrationBuilder.Sql($"INSERT INTO CoffeeShops (Name, OpeningHours, Adress) VALUES ('Café do Ponto', 'Segunda a Sábado: 07:00 - 22:00', 'Av. Paulista, 123')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
