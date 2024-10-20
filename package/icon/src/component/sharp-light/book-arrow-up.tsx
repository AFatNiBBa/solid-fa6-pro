
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=sharp-light book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l112 0 0-32L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l112 0 0-32L64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l352 0 0 352-112 0 0 32 80 0 0 64-80 0 0 32 128 0 16 0 0-32-16 0-16 0 0-64 16 0 16 0 0-16 0-384 0-16L432 0 64 0zm68.7 228.7L121.4 240 144 262.6l11.3-11.3L224 182.6 224 496l0 16 32 0 0-16 0-313.4 68.7 68.7L336 262.6 358.6 240l-11.3-11.3-96-96L240 121.4l-11.3 11.3-96 96z" />
    </Icon>
);

export default BookArrowUp;