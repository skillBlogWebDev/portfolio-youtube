import styles from '../../styles/skills.module.scss';
import MainTitle from '../MainTitle/MainTitle';
import SkillsItem from './SkillsItem';

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <MainTitle text='навыки' />
            </div>
            <div className="sub-container">
                <ul className={styles.skills__list}>
                    <SkillsItem
                        title='Веб-Разработка'
                        text='Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm.'
                        iconClass={styles.skills__web}
                    />
                    <SkillsItem
                        title='UI/UX Дизайн'
                        text='Photoshop, Illustrator, Sketch, Axure, XMind, Прототипирование, Wireframing, Исследование Пользователей, Юзабилити-Тестирование'
                        iconClass={styles.skills__ux}
                    />
                    <SkillsItem
                        title='Разработка Frontend'
                        text='HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal, Phonegap / Cordova, Ionic, Foundation, Angular.js.'
                        iconClass={styles.skills__front}
                    />
                    <SkillsItem
                        title='Консалтинг и SEO-Аудит'
                        text='Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg.'
                        iconClass={styles.skills__seo}
                    />
                </ul>
            </div>
        </section>
    );
}

export default Skills;