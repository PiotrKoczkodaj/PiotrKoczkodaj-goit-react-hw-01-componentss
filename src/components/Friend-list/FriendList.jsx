import { FriendListItem } from "./FriendListItem"

export const FriendList = ({friends}) => {
 
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem name={friend.name} isOnline={friend.isOnline} avatar={friend.avatar} />
           ))} 
                  
</ul>
    )
  
}