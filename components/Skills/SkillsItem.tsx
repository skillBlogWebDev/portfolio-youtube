import styles from '../../styles/skills.module.scss';

interface ISkillsItem {
    text: string;
    title: string;
    iconClass: string;
}

const SkillsItem = ({ text, title, iconClass }: ISkillsItem) => {
    return (
        <li className={styles.skills__item}>
            <h3 className={`${styles.skills__title} ${iconClass}`}>
                <span className={styles.skills__title__text}>{title}</span>
                <span className={styles.skills__title__border} />
            </h3>
            <p className={styles.skills__text}>{text}</p>
        </li>
    );
}

export default SkillsItem;