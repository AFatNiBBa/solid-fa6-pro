
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-blank?s=duotone book-blank}
 * @preview ![book-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-blank.svg)
 */
const BookBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
        <path d="M0 96C0 43 43 0 96 0L384 0l32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l-64 0-96 0L96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 96 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96z" />
    </Icon>
);

export default BookBlank;