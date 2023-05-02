import propTypes from 'prop-types';
import css from './FriendList.module.css';
import {FriendListItem} from "../FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <FriendListItem
                    key={id}
                    id={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};