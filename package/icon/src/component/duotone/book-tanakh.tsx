
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-tanakh` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-tanakh?s=duotone book-tanakh}
 * @preview ![book-tanakh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-tanakh.svg)
 */
const BookTanakh: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l64 0 96 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-96 0-64 0 0-64z" />
        <path d="M448 96c0-53-43-96-96-96L64 0 32 0C14.3 0 0 14.3 0 32L0 352c0 17.7 14.3 32 32 32l64 0 96 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-96 0-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 288 0c53 0 96-43 96-96l0-320zM138.7 208l-13.9 24 27.7 0-13.9-24zm13.9-24l27.7 48 55.4 0 27.7-48-27.7-48-55.4 0-27.7 48zm-27.7 0L97.1 136c-6.2-10.7 1.5-24 13.9-24l55.4 0 27.7-48c6.2-10.7 21.6-10.7 27.7 0l27.7 48 55.4 0c12.3 0 20 13.3 13.9 24l-27.7 48 27.7 48c6.2 10.7-1.5 24-13.9 24l-55.4 0-27.7 48c-6.2 10.7-21.6 10.7-27.7 0l-27.7-48L111 256c-12.3 0-20-13.3-13.9-24l27.7-48zm27.7-48l-27.7 0 13.9 24 13.9-24zm41.6-24l27.7 0L208 88l-13.9 24zm69.3 24l13.9 24 13.9-24-27.7 0zm13.9 72l-13.9 24 27.7 0-13.9-24zm-55.4 48l-27.7 0L208 280l13.9-24z" />
    </Icon>
);

export default BookTanakh;