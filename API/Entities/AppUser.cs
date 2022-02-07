namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { set; get; }
        public byte[] PasswordSalt { set; get; }
        //public byte[] TestBute { set; get; }
    }
}