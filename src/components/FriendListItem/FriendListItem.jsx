import propTypes from 'prop-types';
import css from "./FriendListItem.module.css"

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={css.item}>
          <span className={`${css.status} ${css[isOnline]}`}>
            {isOnline}
          </span>
          <img
            className="avatar"
            src={avatar}
            alt={name}
            width="48"
          />
          <p className="name">{name}</p>
        </li>)
}

FriendListItem.propTypes = {
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
}
