/* eslint-disable @next/next/no-img-element */
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import SocialList from './SocialList';
import styles from '../../styles/about.module.scss';
import { useMediaQuery } from '../../hooks/index';

const About = () => {
    const isMobile1080 = useMediaQuery(1080);

    return (
        <section className={styles.about } id='about'>
            <div className="container">
                <MainTitle text='обо мне' />
            </div>
            <div className={`sub-container ${styles.about__sub_container}`}>
                <img className={styles.about__img} src="/img/about.png" alt="avatar" />
                <div className={styles.about__inner}>
                    <h3 className={styles.about__title}>
                        Иван Иванов
                        <span className={styles.about__title__border}>
                            <span className={styles.about__title__border__arrow}>
                                <ArrowSvg />
                            </span>
                            <span className={styles.about__title__border__line} />
                        </span>
                    </h3>
                    <div className={styles.about__text}>
                        <p>
                            Расположенный в Хартфорде, штат Коннектикут. 
                            В настоящее время я работаю по совместительству Удаленным младшим веб-разработчиком для Coolor, расположенного в Лас-Вегасе.
                        </p>
                        <p>
                            Я ищу, чтобы взять на себя больше работы и повысить свои навыки в качестве веб-разработчика.
                        </p>
                    </div>
                    {!isMobile1080 && <SocialList />}
                </div>
            </div>
            <div className="sub-container">
                {isMobile1080 && <SocialList />}
            </div>
        </section>
    );
}

export default About;