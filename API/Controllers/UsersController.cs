using System;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController(IUserRespository userRespository) : BaseApiController
{   
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
        var users = await userRespository.GetMembersAsync();

        return Ok(users);
    }

    [HttpGet ("{username}")] // api/users/id
    public async Task<ActionResult<MemberDto>> GetUser(string username)
    {
        var user = await userRespository.GetMemberAsync(username);

        if (user == null) return NotFound(); 

        return user;
    }

}
