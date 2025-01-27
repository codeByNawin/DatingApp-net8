using System;
using API.Entities;

namespace API.Interfaces;

public interface ITokenSevice
{
    string CreateToken(AppUser user);
}
