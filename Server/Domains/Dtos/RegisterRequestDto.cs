﻿namespace Server.Domains.Dtos;

public class RegisterRequestDto
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string passwordConfirmation { get; set; }
}
