
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-right?s=sharp-light book-arrow-right}
 * @preview ![book-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-arrow-right.svg)
 */
const BookArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l368 0 16 0 0-32-16 0-16 0 0-64 16 0 16 0 0-16 0-128-32 0 0 112L64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l352 0 0 112 32 0 0-128 0-16L432 0 64 0zM384 416l0 64L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l320 0zM531.3 100.7L520 89.4 497.4 112l11.3 11.3L577.4 192 272 192l-16 0 0 32 16 0 305.4 0-68.7 68.7L497.4 304 520 326.6l11.3-11.3 96-96L638.6 208l-11.3-11.3-96-96z" />
    </Icon>
);

export default BookArrowRight;