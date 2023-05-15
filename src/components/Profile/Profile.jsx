import styles from "./Profile.module.css"

export const Profile = ({ avatar, tag, location, stats, username, }) => {
    
    return (
        
            <div className={styles.profile}>
        <div className={styles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
          <p  className={styles.name}>{username}</p>
    <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
    <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
    <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
        
    )
}