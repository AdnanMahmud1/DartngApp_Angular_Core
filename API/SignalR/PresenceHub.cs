using API.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using SQLitePCL;

namespace API.SignalR
{
    [Authorize]
    public class PresenceHub: Hub 
    {
        private readonly PresenceTracker _traker;

        public PresenceHub(PresenceTracker traker)
        {
            _traker = traker;
        }
        public override async Task OnConnectedAsync()
        {
            await _traker.UserConnected(Context.User.GetUsername(), Context.ConnectionId);
            await Clients.Others.SendAsync("UserIsOnline", Context.User.GetUsername());
            var currentUsers = await _traker.GetOnlineUsers();
            await Clients.All.SendAsync("GetOnlineUsers", currentUsers);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await _traker.UserDisconnected(Context.User.GetUsername(), Context.ConnectionId);
            await Clients.Others.SendAsync("UserIsOffline", Context.User.GetUsername());
            await base.OnDisconnectedAsync(exception);
        }
    }
}
