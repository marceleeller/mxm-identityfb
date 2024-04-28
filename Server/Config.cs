using IdentityServer4.Models;

namespace Server;

public class Config
{

    public static IEnumerable<IdentityResource> IdentityResources =>
        new[]
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
            new IdentityResources.Email(),
            new IdentityResource
            {
                Name = "role",
                UserClaims = new List<string> { "role" }
            }
        };

    public static IEnumerable<ApiScope> ApiScopes =>
        new[]
        { new ApiScope("DesafioMXMAPI.read"), new ApiScope("DesafioMXMAPI.write") };

    public static IEnumerable<ApiResource> ApiResources =>
        new[]
        {
            new ApiResource("DesafioMXMAPI")
            {
                Scopes = { "DesafioMXMAPI.read", "DesafioMXMAPI.write" },
/*                ApiSecrets = new List<Secret> { new Secret("ScopeSecret".Sha256()) },
                UserClaims = new List<string> { "role" }*/
            }
        };

    public static IEnumerable<Client> Clients =>
        new[]
        {
            // m2m client credentials flow client
            new Client
            {
                ClientId = "m2m.client",
                ClientName = "Client Credentials Client",
                AllowedGrantTypes = GrantTypes.ClientCredentials,
                ClientSecrets = { new Secret("ClientSecret1".Sha256()) },
                AllowedScopes = { "DesafioMXMAPI.read", "DesafioMXMAPI.write" }
            },

            new Client {
                ClientId = "angular",
                ClientName = "Angular",
                AllowedGrantTypes = GrantTypes.Code,
                RequireClientSecret = false,
                RequirePkce = true,
                AllowedScopes = { "openid", "profile", "email", "DesafioMXMAPI.read" },
                AlwaysIncludeUserClaimsInIdToken = true,
                RedirectUris = {"http://localhost:4200/auth-callback"},
                PostLogoutRedirectUris = {"http://localhost:4200"},
                AllowedCorsOrigins = {"http://localhost:4200"},
                AllowAccessTokensViaBrowser = true,
                RequireConsent = false,
            }
        };
}
