
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-right?s=sharp-duotone-solid book-arrow-right}
 * @preview ![book-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-arrow-right.svg)
 */
const BookArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32zM224 184c8 0 16 0 24 0l200 0c31.4 0 62.7 0 94.1 0l-39-39-17-17L520 94.1l17 17 80 80 17 17-17 17-80 80-17 17L486.1 288l17-17 39-39c-106 0-212 0-318.1 0l0-48z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0 32 0 0-152-200 0-24 0 0-48 24 0 200 0L448 0 416 0 384 0 96 0z" />
    </Icon>
);

export default BookArrowRight;