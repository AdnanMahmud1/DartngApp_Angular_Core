using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class LikesController:BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly ILikesRepository _likesRepository;

        public LikesController(IUserRepository userRepository, ILikesRepository likesRepository)
        {
            _userRepository = userRepository;
            _likesRepository = likesRepository;
        }

        [HttpPost("{username}")]
        public async Task<ActionResult> AddLike(string username)
        {
            var sourceUserId = User.GetUserId();
            var likedUser = await _userRepository.GetUserByUsernameAsync(username);
            var sourceUser = await _likesRepository.GetUserWithLikes(sourceUserId);

            if (likedUser == null) return NotFound();
            if(sourceUser.UserName == username) return BadRequest("you cannot like yourself");

            var userlike = await _likesRepository.GetUserLike(sourceUserId, likedUser.Id);
            if (userlike != null) return BadRequest("You already liked this user");

            userlike = new UserLike
            {
                SourceUserId = sourceUserId,
                LikedUserId = likedUser.Id
            };
            sourceUser.LikedUser.Add(userlike);
            if (await _userRepository.SaveAllAsync()) return Ok();

            return BadRequest("Failed to like user");
            
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LikeDto>>> GetUserLikes(string predicates)
        {
            var users= await _likesRepository.GetUserLikes(predicates, User.GetUserId());
            return Ok(users);
        }
    }
}
