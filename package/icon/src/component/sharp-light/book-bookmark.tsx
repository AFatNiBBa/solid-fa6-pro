
import { Icon } from "../../index";

/**
 * A component that renders the `book-bookmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-bookmark?s=sharp-light book-bookmark}
 * @preview ![book-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-bookmark.svg)
 */
const BookBookmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0l96 0 16 0L336 0l16 0 80 0 16 0 0 16 0 384 0 16-16 0-16 0 0 64 16 0 16 0 0 32-16 0L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM320 32L192 32l0 174.7 54-43.2 10-8 10 8 54 43.2L320 32zM160 32L64 32C46.3 32 32 46.3 32 64l0 328.6c9.4-5.4 20.3-8.6 32-8.6l352 0 0-352-64 0 0 208 0 33.3-26-20.8-70-56-70 56-26 20.8 0-33.3 0-208zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416z" />
    </Icon>
);

export default BookBookmark;