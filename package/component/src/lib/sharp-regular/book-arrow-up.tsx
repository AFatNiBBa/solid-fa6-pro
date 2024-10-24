
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=sharp-regular book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M88 0C39.4 0 0 39.4 0 88L0 424l.4 0c-.3 2.6-.4 5.3-.4 8c0 44.2 35.8 80 80 80l96 0 0-48-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0 0-48-96 0c-11.4 0-22.2 2.4-32 6.7L48 88c0-22.1 17.9-40 40-40l312 0 0 304-96 0 0 48 64 0 0 64-64 0 0 48 120 0 24 0 0-48-24 0-8 0 0-64 8 0 24 0 0-24 0-352 0-24L424 0 88 0zm55 215l-17 17L160 265.9l17-17 39-39L216 512l48 0 0-302.1 39 39 17 17L353.9 232l-17-17-80-80-17-17-17 17-80 80z" />
    </Icon>
);

export default BookArrowUp;