import PropTypes from "prop-types";
import styles from './FriendList.module.css';


export const FriendListItem = ({ avatar, name, isOnline, id }) => {

    return (
        
        <li className={styles.item} key={id}>
            <span className={ isOnline? styles.active : styles.disabled}>{isOnline }</span>
  <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
</li>
 )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired
}