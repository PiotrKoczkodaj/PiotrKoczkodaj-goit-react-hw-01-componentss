import { FriendListItem } from "./FriendListItem"
import styles from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
    
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <FriendListItem name={friend.name} isOnline={friend.isOnline} avatar={friend.avatar} id={friend.id} />
           ))} 
                  
            </ul>
            
    )
  
}