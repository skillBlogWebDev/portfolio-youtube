/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/portfolio.module.scss';

interface IPortfolioSliderItem {
    title: string; 
    imgSrc: string;
    link: string;
}

const PortfolioSliderItem = ({ title, imgSrc, link }: IPortfolioSliderItem) => (
    <div className={styles.portfolio__slide}>
        <a className={styles.portfolio__slide__link} href={link}>
            <span className={styles.portfolio__slide__inner}>
                <span className={styles.portfolio__slide__text}>{title}</span>
            </span>
            <img className={styles.portfolio__slide__img} src={imgSrc} alt={title} />
        </a>
    </div>
);

export default PortfolioSliderItem;