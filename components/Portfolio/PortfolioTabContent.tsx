import { motion } from "framer-motion";
import styles from '../../styles/portfolio.module.scss';
import PortfolioTabItem from "./PortfolioTabItem";

interface IPortfolioTabContent {
    tabItems: {
        id: number;
        img: string;
        link: string;
        title: string;
    }[]
}

const PortfolioTabContent = ({ tabItems }: IPortfolioTabContent) => (
    <>
        {tabItems.map(item => (
            <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item.id}
                className={styles.portfolio__list__item}
            >
                <PortfolioTabItem title={item.title} imgSrc={item.img} link={item.link} />
            </motion.li>
        ))}
    </>
);

export default PortfolioTabContent