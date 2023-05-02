import propTypes from 'prop-types'; 
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}
      <ul className={css.statList}>
        {stats.map(stats => (
          <li
            key={stats.id}
            className={css.item}
            style={css.style}
          >
            <span className={css.label}> {stats.label}</span>
            <span className="percentage"> {stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};