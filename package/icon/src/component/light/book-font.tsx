
import { Icon } from "../../index";

/**
 * A component that renders the `book-font` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=light book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L400 0c26.5 0 48 21.5 48 48l0 320c0 20.9-13.4 38.7-32 45.3l0 66.7 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416zM32 392.6c9.4-5.4 20.3-8.6 32-8.6l336 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 32C46.3 32 32 46.3 32 64l0 328.6zM254.3 104.8l63.9 127.7c.1 .2 .2 .4 .3 .6l31.8 63.7c4 7.9 .7 17.5-7.2 21.5s-17.5 .7-21.5-7.2L294.1 256l-108.2 0-27.6 55.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l31.8-63.7c.1-.2 .2-.4 .3-.6l63.9-127.7c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8zM278.1 224L240 147.8 201.9 224l76.2 0z" />
    </Icon>
);

export default BookFont;