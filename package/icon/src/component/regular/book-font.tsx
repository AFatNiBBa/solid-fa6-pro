
import { Icon } from "../../index";

/**
 * A component that renders the `book-font` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=regular book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88C0 39.4 39.4 0 88 0L392 0c30.9 0 56 25.1 56 56l0 288c0 22.3-13.1 41.6-32 50.6l0 69.4 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L80 512c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8L0 424 0 88zM80 400c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0 0-64L80 400zM48 358.7c9.8-4.3 20.6-6.7 32-6.7l312 0c4.4 0 8-3.6 8-8l0-288c0-4.4-3.6-8-8-8L88 48C65.9 48 48 65.9 48 88l0 270.7zM261.5 93.3l88 176c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L289.2 256c-.4 0-.8 0-1.2 0l-96 0c-.4 0-.8 0-1.2 0l-17.4 34.8c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l88-176C222.6 85.1 230.9 80 240 80s17.4 5.1 21.5 13.3zM265.2 208L240 157.7 214.8 208l50.3 0z" />
    </Icon>
);

export default BookFont;