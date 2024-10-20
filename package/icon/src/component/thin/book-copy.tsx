
import { Icon } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=thin book-copy}
 * @preview ![book-copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-copy.svg)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 56c0-22.1 17.9-40 40-40l296 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16l-8 0-288 0c-15.7 0-29.8 6.4-40 16.8L208 56zM192 359.6l0 .1 0 .3c0 30.9 25.1 56 56 56l288 0 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-80c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L248 0c-30.9 0-56 25.1-56 56l0 303.6zM528 320l0 80-280 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l280 0zM352 496l0-48-16 0 0 48L56 496c-22.1 0-40-17.9-40-40s17.9-40 40-40l124.1 0c-4.1-4.9-7.6-10.3-10.5-16L56 400c-15.7 0-29.8 6.4-40 16.8L16 152c0-22.1 17.9-40 40-40l104 0 0-16L56 96C25.1 96 0 121.1 0 152L0 455.6l0 .1 0 .3c0 30.9 25.1 56 56 56l288 0 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0z" />
    </Icon>
);

export default BookCopy;