namespace API.Helpers
{
    public class UserParams:PaginationParams
    {
        public string CurrentUserName { get; set; }
        public string Gender { get; set; }
        public int MinAge { set; get; } = 18;
        public int MaxAge { get; set; } = 150;
        public string OrderBy { get; set; } = "lastActive";
    }
}
