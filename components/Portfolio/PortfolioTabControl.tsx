import ArrowSvg from "../ArrowSvg/ArrowSvg";
import styles from '../../styles/portfolio.module.scss';

interface IPortfolioTabControl {
    title: string;
    isActive: boolean;
    handleShowTab: () => void;
}

const PortfolioTabControl = ({ title, isActive, handleShowTab }: IPortfolioTabControl) => {
    return (
        <li className={styles.portfolio__tabs__item}>
            <button className={styles.portfolio__tabs__item__btn} onClick={handleShowTab}>
                <span
                    className={styles.portfolio__tabs__item__btn__text}
                    style={{ color: isActive ? '#F2F2F2' : '#B7BFD1' }}
                >
                    {title}
                </span>
                {isActive && <span className={styles.portfolio__tabs__item__btn__arrow}><ArrowSvg /></span>}
                <span
                    className={`
                    ${styles.portfolio__tabs__item__btn__border} ${isActive ? styles.portfolio__tabs__item__btn__border_active : ''}`}
                />
            </button>
        </li>
    );
}

export default PortfolioTabControl;