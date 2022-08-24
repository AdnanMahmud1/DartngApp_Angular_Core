using API.Entities;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class Seed
    {
        public static async Task SeedUsers(UserManager<AppUser> userManager)
        {
            if (await userManager.Users.AnyAsync()) return;
            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json ");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            foreach (var user in users) 
            {
                user.UserName =user.UserName.ToLower();
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
           
        }
    }
}
