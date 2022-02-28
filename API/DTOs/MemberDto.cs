namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string PhotoUrl { get; set; }
        public int Age { set; get; }
        public string KnownAs { set; get; }
        public DateTime Creadted { set; get; } 
        public DateTime LastActive { set; get; } 
        public string Gender { set; get; }
        public string Introduction { set; get; }
        public string LookingFor { set; get; }
        public string Interests { set; get; }
        public string City { set; get; }
        public string Country { set; get; }
        public ICollection<PhotoDto> Photos { get; set; }
    }
}
