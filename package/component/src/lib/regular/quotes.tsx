
import { Icon } from "../../index";

/**
 * A component that renders the `quotes` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quotes?s=regular quotes}
 * @preview ![quotes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/quotes.svg)
 */
const Quotes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96C0 43 43 0 96 0l8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0C69.5 48 48 69.5 48 96l48 0c26.5 0 48 21.5 48 48l0 48c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48l0-24 0-24L0 96zm48 72l0 24 48 0 0-48-48 0 0 24zM176 96c0-53 43-96 96-96l8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0c-26.5 0-48 21.5-48 48l48 0c26.5 0 48 21.5 48 48l0 48c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48l0-24 0-24 0-48zm48 48l0 24 0 24 48 0 0-48-48 0zM576 416c0 53-43 96-96 96l-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0c26.5 0 48-21.5 48-48l-48 0c-26.5 0-48-21.5-48-48l0-48c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 24 0 24 0 48zm-48-48l0-24 0-24-48 0 0 48 48 0zM400 416c0 53-43 96-96 96l-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0c26.5 0 48-21.5 48-48l-48 0c-26.5 0-48-21.5-48-48l0-48c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 24 0 24 0 48zm-48-72l0-24-48 0 0 48 48 0 0-24z" />
    </Icon>
);

export default Quotes;