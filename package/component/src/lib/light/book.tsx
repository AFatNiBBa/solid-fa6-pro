
import { Icon } from "../../index";

/**
 * A component that renders the `book` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book?s=light book}
 * @preview ![book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book.svg)
 */
const Book: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l368 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-66.7c18.6-6.6 32-24.4 32-45.3l0-320c0-26.5-21.5-48-48-48L64 0zM384 416l0 64L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l320 0zM64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l32 0 0 352-32 0zm64 0l0-352 272 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-272 0zm48-240c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Book;