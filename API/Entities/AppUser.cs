using API.Extensions;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { set; get; }
        public byte[] PasswordSalt { set; get; }
        public DateTime DateOfBirth { set; get; }
        public string KnownAs { set; get; }
        public DateTime Creadted { set; get; }  = DateTime.Now;
        public DateTime LastActive { set; get; } =DateTime.Now;
        public string Gender { set; get; }
        public string Introduction { set; get; }
        public string LookingFor { set; get; }
        public string Interests { set; get; }
        public string City { set; get; }
        public string Country { set; get; }
        public ICollection<Photo> Photos { get; set; }


        public int GetAge()
        {
            return DateOfBirth.CalculateAge();
        }
    }
}