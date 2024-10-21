
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=regular book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M88 0C39.4 0 0 39.4 0 88L0 424l.4 0c-.3 2.6-.4 5.3-.4 8c0 44.2 35.8 80 80 80l96 0 0-48-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0 0-48-96 0c-11.4 0-22.2 2.4-32 6.7L48 88c0-22.1 17.9-40 40-40l304 0c4.4 0 8 3.6 8 8l0 288c0 4.4-3.6 8-8 8l-88 0 0 48 64 0 0 64-64 0 0 48 120 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-69.4c18.9-9 32-28.3 32-50.6l0-288c0-30.9-25.1-56-56-56L88 0zm55 215c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L216 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-278.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
    </Icon>
);

export default BookArrowUp;