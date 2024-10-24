
import { Icon } from "../../index";

/**
 * A component that renders the `book-blank` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-blank?s=light book-blank}
 * @preview ![book-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-blank.svg)
 */
const BookBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L400 0c26.5 0 48 21.5 48 48l0 320c0 20.9-13.4 38.7-32 45.3l0 66.7 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416zM32 392.6c9.4-5.4 20.3-8.6 32-8.6l32 0L96 32 64 32C46.3 32 32 46.3 32 64l0 328.6zM128 32l0 352 272 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L128 32z" />
    </Icon>
);

export default BookBlank;