
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-right?s=sharp-thin book-arrow-right}
 * @preview ![book-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-arrow-right.svg)
 */
const BookArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M56 0C25.1 0 0 25.1 0 56L0 456c0 30.9 25.1 56 56 56l384 0 8 0 0-16-8 0-24 0 0-80 24 0 8 0 0-8 0-152-16 0 0 144L56 400c-15.7 0-29.8 6.4-40 16.8L16 56c0-22.1 17.9-40 40-40l376 0 0 144 16 0L448 8l0-8-8 0L56 0zM400 416l0 80L56 496c-22.1 0-40-17.9-40-40s17.9-40 40-40l344 0zM525.7 98.3L520 92.7 508.7 104l5.7 5.7L604.7 200 264 200l-8 0 0 16 8 0 340.7 0-90.3 90.3-5.7 5.7L520 323.3l5.7-5.7 104-104 5.7-5.7-5.7-5.7-104-104z" />
    </Icon>
);

export default BookArrowRight;