import { MutableRefObject, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { useMediaQuery } from '../../hooks/index';
import styles from '../../styles/hero.module.scss';

const Hero = () => {
    const isMobile800 = useMediaQuery(800);
    const isMobile485 = useMediaQuery(485);
    const heroTitle = useRef() as MutableRefObject<HTMLHeadingElement>;

    useEffect(() => {
        const colors = gsap.to(heroTitle.current, {
            paused: true,
            duration: 20,
            repeat: -1,
            '--hue': 360,
          })
          
          const doRandom = () => {
            gsap.timeline()
              .to(heroTitle.current, {
                duration: 0.1,
                opacity: function(){ return gsap.utils.random(.90, .95) },
                delay: function(){ return gsap.utils.random(.1, 2) },
              }).to(heroTitle.current, {
                duration: 0.1,
                opacity: 1,
                onComplete: function(){
                  doRandom()
                }
              })
          }
          
          const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
          
          if (! mediaQuery || ! mediaQuery.matches) {
            colors.play();
            doRandom();
          }
          
    }, []);
    return (
        <section 
            className={styles.hero}
            style={{ backgroundImage: isMobile485 ? '' : `url('/img/hero-bg${isMobile800 ? '-mobile' : ''}.png')` }}
        >
            <div className='sub-container'>
                <div className={styles.hero__inner}>
                    <h1 className={styles.hero__title} ref={heroTitle}>Web development</h1>
                    <div className={styles.hero__description}>
                        <p>Вы работаете над чем-то великим?</p>
                        <p>Я с удовольствием помогу вам в этом! Напишите мне письмо и мы начнем проект прямо сейчас!</p>
                    </div>
                    <Link
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}
                        className={styles.hero__btn}
                    >
                        Связаться с разработчиком
                    </Link>
                    {!isMobile800 && <Link
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}
                        className={styles.hero__arrow}
                    />}
                </div>
            </div>
        </section>
    );
}

export default Hero;