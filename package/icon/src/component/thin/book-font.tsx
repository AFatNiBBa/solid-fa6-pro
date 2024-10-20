
import { Icon } from "../../index";

/**
 * A component that renders the `book-font` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=thin book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L408 0c22.1 0 40 17.9 40 40l0 336c0 19.4-13.7 35.5-32 39.2l0 80.8 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L56 512c-30.9 0-56-25.1-56-56L0 56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416zm-40 .8C26.2 406.4 40.3 400 56 400l352 0c13.3 0 24-10.7 24-24l0-336c0-13.3-10.7-24-24-24L56 16C33.9 16 16 33.9 16 56l0 360.8zM247.2 100.4l71.9 143.9 .1 .3 31.9 63.8c2 4 .4 8.8-3.6 10.7s-8.8 .4-10.7-3.6L307.1 256l-134.1 0-29.8 59.6c-2 4-6.8 5.6-10.7 3.6s-5.6-6.8-3.6-10.7l31.9-63.8 .1-.3 71.9-143.9c1.4-2.7 4.1-4.4 7.2-4.4s5.8 1.7 7.2 4.4zM299.1 240L240 121.9 180.9 240l118.1 0z" />
    </Icon>
);

export default BookFont;