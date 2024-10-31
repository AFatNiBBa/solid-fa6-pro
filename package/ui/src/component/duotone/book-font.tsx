
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-font` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=duotone book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zM254.3 72.8l64 128 32 64c4 7.9 .7 17.5-7.2 21.5s-17.5 .7-21.5-7.2L294.1 224l-108.2 0-27.6 55.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l32-64 64-128c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8zM240 115.8L201.9 192l76.2 0L240 115.8z" />
    </Icon>
);

export default BookFont;