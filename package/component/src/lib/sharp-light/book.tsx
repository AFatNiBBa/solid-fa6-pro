
import { Icon } from "../../index";

/**
 * A component that renders the `book` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book?s=sharp-light book}
 * @preview ![book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book.svg)
 */
const Book: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L432 0l16 0 0 16 0 384 0 16-16 0-16 0 0 64 16 0 16 0 0 32-16 0L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416zM32 392.6c9.4-5.4 20.3-8.6 32-8.6l32 0L96 32 64 32C46.3 32 32 46.3 32 64l0 328.6zM128 32l0 352 288 0 0-352L128 32zm48 96l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm0 96l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32z" />
    </Icon>
);

export default Book;