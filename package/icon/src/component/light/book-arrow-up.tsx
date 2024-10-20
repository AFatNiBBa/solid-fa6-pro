
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=light book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l112 0 0-32L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l112 0 0-32L64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l336 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-96 0 0 32 80 0 0 64-80 0 0 32 128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-66.7c18.6-6.6 32-24.4 32-45.3l0-320c0-26.5-21.5-48-48-48L64 0zm68.7 228.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 182.6 224 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-313.4 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0l-96 96z" />
    </Icon>
);

export default BookArrowUp;