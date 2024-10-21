
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-right?s=sharp-regular book-arrow-right}
 * @preview ![book-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/book-arrow-right.svg)
 */
const BookArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M88 0C39.4 0 0 39.4 0 88L0 424l.4 0c-.3 2.6-.4 5.3-.4 8c0 44.2 35.8 80 80 80l344 0 24 0 0-48-24 0-8 0 0-64 8 0 24 0 0-24 0-88-48 0 0 64L80 352c-11.4 0-22.2 2.4-32 6.7L48 88c0-22.1 17.9-40 40-40l312 0 0 80 48 0 0-104 0-24L424 0 88 0zM368 400l0 64L80 464c-17.7 0-32-14.3-32-32s14.3-32 32-32l288 0zM537 111l-17-17L486.1 128l17 17 39 39L256 184l0 48 286.1 0-39 39-17 17L520 321.9l17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default BookArrowRight;