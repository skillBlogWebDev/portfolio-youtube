import { MutableRefObject, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import ContactInput from "./ContactInput";
import emailjs from '@emailjs/browser';
import styles from '../../styles/contact.module.scss';

const ContactForm = () => {
    const [acceptWithRules, setAcceptWithRules] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;

    const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSpinner(true);
        emailjs.sendForm('service_4406d2p', 'template_2y49n2e', formRef.current, 'ARtfb1bp4SELm6yXa')
        .then(result => {
            setSpinner(false);
            toast(`Данные отправлены ${result.text}`);
        }, error => {
            setSpinner(false);
            toast.error(`Данные отправлены ${error.text}`);
        })

        formRef.current.reset();
        setAcceptWithRules(false);
    }

    return (
        <form onSubmit={sendEmail} className={styles.contact__form} ref={formRef}>
            <ContactInput
                text="Ф.И.О.*"
                placeholder="Укажите ваши Ф.И.О."
                type="text"
                name='fullName'
            />
            <ContactInput
                text="Должность/компания"
                placeholder="Укажите вашу должность/компанию"
                type="text"
                name='company'
            />
            <ContactInput
                text="E-mail*"
                placeholder="Укажите ваш E-mail"
                type="email"
                name='email'
            />
            <ContactInput
                text="Телефон*"
                placeholder="Укажите ваш телефон"
                type="tel"
                name='phone'
            />
            <button
                className={styles.contact__form__btn}
                disabled={!acceptWithRules}
            >
                {spinner ? <PropagateLoader color="#fff" /> : 'Отправить заявку'}
            </button>
            <label className={styles.contact__checkbox}>
                <input
                    className={styles.contact__checkbox__input}
                    type="checkbox"
                    onChange={toggleAcceptWithRules}
                />
                <span className={styles.contact__checkbox__span} />
                <span className={styles.contact__checkbox__text}>Нажимая на кнопку «Отправить заявку», я соглашаюсь с <Link href='/privacy-policy' passHref legacyBehavior><a className={styles.contact__checkbox__link}>Политикой конфиденциальности</a></Link> и даю <Link legacyBehavior href='/personal-data-of-clients' passHref><a className={styles.contact__checkbox__link}>Согласие на обработку персональных данных.</a></Link></span>
            </label>
        </form>
    );
}

export default ContactForm;