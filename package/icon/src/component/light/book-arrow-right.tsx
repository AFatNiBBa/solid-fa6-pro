
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-right?s=light book-arrow-right}
 * @preview ![book-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-arrow-right.svg)
 */
const BookArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l368 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-66.7c18.6-6.6 32-24.4 32-45.3l0-96-32 0 0 96c0 8.8-7.2 16-16 16L64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l336 0c8.8 0 16 7.2 16 16l0 96 32 0 0-96c0-26.5-21.5-48-48-48L64 0zM384 416l0 64L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l320 0zM539.3 100.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L585.4 192 272 192c-8.8 0-16 7.2-16 16s7.2 16 16 16l313.4 0-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6l-96-96z" />
    </Icon>
);

export default BookArrowRight;