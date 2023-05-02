import propTypes from 'prop-types'; 
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.list}>
                    <span class={css.label}>Followers</span>
                    <span class={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.list}>
                    <span class={css.label}>Views</span>
                    <span class={css.quantity}>{stats.views}</span>
                </li>
                <li className={css.list}>
                    <span class={css.label}>Likes</span>
                    <span class={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    avatar: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.shape({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired,
    }),
};


