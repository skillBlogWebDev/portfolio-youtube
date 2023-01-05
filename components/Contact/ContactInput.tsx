import styles from '../../styles/contact.module.scss';

interface IContactInput {
    type: string;
    text: string;
    placeholder: string;
    name: string;
}

const ContactInput = ({ type, text, placeholder, name }: IContactInput) => (
    <label className={styles.contact__form__label}>
        <span className={styles.contact__form__label__text}>{text}</span>
        <input
            className={styles.contact__form__label__input}
            type={type}
            placeholder={placeholder}
            name={name}
            required
        />
    </label>
);

export default ContactInput;