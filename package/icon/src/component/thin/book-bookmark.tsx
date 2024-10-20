
import { Icon } from "../../index";

/**
 * A component that renders the `book-bookmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-bookmark?s=thin book-bookmark}
 * @preview ![book-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-bookmark.svg)
 */
const BookBookmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L168 0 344 0l64 0c22.1 0 40 17.9 40 40l0 336c0 19.4-13.7 35.5-32 39.2l0 80.8 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L56 512c-30.9 0-56-25.1-56-56L0 56zM336 16L176 16l0 215.1 74.9-61.3c2.9-2.4 7.2-2.4 10.1 0L336 231.1 336 16zM160 16L56 16C33.9 16 16 33.9 16 56l0 360.8C26.2 406.4 40.3 400 56 400l352 0c13.3 0 24-10.7 24-24l0-336c0-13.3-10.7-24-24-24l-56 0 0 232c0 3.1-1.8 5.9-4.6 7.2s-6.1 .9-8.5-1L256 186.3l-82.9 67.9c-2.4 2-5.7 2.4-8.5 1s-4.6-4.1-4.6-7.2l0-232zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416z" />
    </Icon>
);

export default BookBookmark;