import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrap}>
      <div>
        <img src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.email}>{`@ ${tag}`}</p>
        <p className={css.city}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
