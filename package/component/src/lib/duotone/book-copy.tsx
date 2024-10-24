
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=duotone book-copy}
 * @preview ![book-copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-copy.svg)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 416c0 53 43 96 96 96l224 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0-48 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l74.8 0c-6.9-14.5-10.8-30.8-10.8-48l0-240L96 96C43 96 0 139 0 192z" />
        <path d="M288 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l224 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L512 0 288 0zm0 288l192 0 0 64-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default BookCopy;