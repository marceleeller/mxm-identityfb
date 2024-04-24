﻿using IdentityServer4.Models;

namespace Server;

public class Config
{

    public static IEnumerable<IdentityResource> IdentityResources =>
        new[]
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
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
                ApiSecrets = new List<Secret> { new Secret("ScopeSecret".Sha256()) },
                UserClaims = new List<string> { "role" }
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
            // interactive client using code flow + pkce
            new Client
            {
                ClientId = "interactive",
                ClientSecrets = { new Secret("ClientSecret1".Sha256()) },
                AllowedGrantTypes = GrantTypes.Code,
                RedirectUris = { "https://localhost:5444/signin-oidc" },
                FrontChannelLogoutUri = "https://localhost:5444/signout-oidc",
                PostLogoutRedirectUris = { "https://localhost:5444/signout-callback-oidc" },
                AllowOfflineAccess = true,
                AllowedScopes = { "openid", "profile", "DesafioMXMAPI.read" },
                RequirePkce = true,
                RequireConsent = true,
                AllowPlainTextPkce = false
            }
        };
}
