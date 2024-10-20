
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=sharp-thin book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M56 0C25.1 0 0 25.1 0 56L0 456c0 30.9 25.1 56 56 56l136 0 0-16L56 496c-22.1 0-40-17.9-40-40s17.9-40 40-40l136 0 0-16L56 400c-15.7 0-29.8 6.4-40 16.8L16 56c0-22.1 17.9-40 40-40l376 0 0 384-144 0 0 16 112 0 0 80-112 0 0 16 152 0 8 0 0-16-8 0-24 0 0-80 24 0 8 0 0-8L448 8l0-8-8 0L56 0zm74.3 234.3l-5.7 5.7L136 251.3l5.7-5.7L232 155.3 232 504l0 8 16 0 0-8 0-348.7 90.3 90.3 5.7 5.7L355.3 240l-5.7-5.7-104-104-5.7-5.7-5.7 5.7-104 104z" />
    </Icon>
);

export default BookArrowUp;