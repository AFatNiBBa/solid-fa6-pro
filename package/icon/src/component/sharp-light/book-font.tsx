
import { Icon } from "../../index";

/**
 * A component that renders the `book-font` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=sharp-light book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L432 0l16 0 0 16 0 384 0 16-16 0-16 0 0 64 16 0 16 0 0 32-16 0L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416zM32 392.6c9.4-5.4 20.3-8.6 32-8.6l352 0 0-352L64 32C46.3 32 32 46.3 32 64l0 328.6zM249.9 96l4.4 8.8L361.9 320l-35.8 0-32-64-108.2 0-32 64-35.8 0L225.7 104.8l4.4-8.8 19.8 0zm-48 128l76.2 0L240 147.8 201.9 224z" />
    </Icon>
);

export default BookFont;