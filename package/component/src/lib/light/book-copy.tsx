
import { Icon } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=light book-copy}
 * @preview ![book-copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-copy.svg)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 64c0-17.7 14.3-32 32-32l272 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-272 0c-11.7 0-22.6 3.1-32 8.6L224 64zm-32 0l0 288c0 35.3 28.7 64 64 64l272 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-66.7c18.6-6.6 32-24.4 32-45.3l0-224c0-26.5-21.5-48-48-48L256 0c-35.3 0-64 28.7-64 64zm64 320c-17.7 0-32-14.3-32-32s14.3-32 32-32l256 0 0 64-256 0zm96 96l0-32-32 0 0 32L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l120.4 0c-8.3-9.2-14.8-20.1-19-32L64 384c-11.7 0-22.6 3.1-32 8.6L32 160c0-17.7 14.3-32 32-32l96 0 0-32L64 96C28.7 96 0 124.7 0 160L0 448c0 35.3 28.7 64 64 64l272 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0z" />
    </Icon>
);

export default BookCopy;