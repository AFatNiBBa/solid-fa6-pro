
import { Icon } from "../../index";

/**
 * A component that renders the `person-chalkboard` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-chalkboard?s=regular person-chalkboard}
 * @preview ![person-chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-chalkboard.svg)
 */
const PersonChalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-13.7 80l29.8 0 0 128-32 0 0-127.9c.7 0 1.5-.1 2.3-.1zM176 488l0-136 32 0 0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-312 136 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0 0-80 224 0 0 224-224 0 0-48-48 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-64.8 0c-31.7 0-61 17.1-76.6 44.7L43.1 276.2c-6.5 11.5-2.5 26.2 9.1 32.7s26.2 2.5 32.7-9.1L128 223.6 128 488c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default PersonChalkboard;