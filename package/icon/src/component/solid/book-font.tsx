
import { Icon } from "../../index";

/**
 * A component that renders the `book-font` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=solid book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 43 43 0 96 0L384 0l32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32zM254.3 72.8c-2.7-5.4-8.3-8.8-14.3-8.8s-11.6 3.4-14.3 8.8l-64 128-32 64c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2L185.9 224l108.2 0 27.6 55.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-32-64-64-128zM240 115.8L278.1 192l-76.2 0L240 115.8z" />
    </Icon>
);

export default BookFont;