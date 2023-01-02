/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/portfolio.module.scss';

interface IPortfolioTabItem {
    title: string; 
    imgSrc: string;
    link: string;
}

const PortfolioTabItem = ({ title, imgSrc, link }: IPortfolioTabItem) => (
    <div className={styles.portfolio__list__inner}>
        <a className={styles.portfolio__list__item__link} href={link}>
            <img className={styles.portfolio__list__item__img} src={imgSrc} alt={title} />
            <h3 className={styles.portfolio__list__item__title}>{title}</h3>
        </a>
    </div>
);

export default PortfolioTabItem;