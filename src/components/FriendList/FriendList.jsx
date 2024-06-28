import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((obj) => {
        return (
          <li key={obj.id}>
            <FriendListItem avatar={obj.avatar} name={obj.name} isOnline={obj.isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
