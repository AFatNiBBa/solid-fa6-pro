
import { Icon } from "../../index";

/**
 * A component that renders the `book-skull` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=sharp-light book-skull}
 * @preview ![book-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-skull.svg)
 */
const BookSkull: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L432 0l16 0 0 16 0 384 0 16-16 0-16 0 0 64 16 0 16 0 0 32-16 0L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416zM32 392.6c9.4-5.4 20.3-8.6 32-8.6l352 0 0-352L64 32C46.3 32 32 46.3 32 64l0 328.6zM240 96c-38.9 0-64 24.6-64 48c0 14.1 8.4 28 24.2 37.5l7.8 4.7 0 9.1 0 12.8 64 0 0-12.8 0-9.1 7.8-4.7C295.6 172 304 158.1 304 144c0-23.4-25.1-48-64-48zm-96 48c0-47.3 46.5-80 96-80s96 32.7 96 80c0 24.6-13 45.6-32 59.7l0 20.3 0 16-16 0-96 0-16 0 0-16 0-20.3c-19-14.1-32-35.1-32-59.7zm56 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM135.4 235.1l14.8 6.2L240 278.7l89.8-37.4 14.8-6.2 12.3 29.5-14.8 6.2L281.6 296l60.6 25.2 14.8 6.2-12.3 29.5-14.8-6.2L240 313.3l-89.8 37.4-14.8 6.2-12.3-29.5 14.8-6.2L198.4 296l-60.6-25.2-14.8-6.2 12.3-29.5z" />
    </Icon>
);

export default BookSkull;