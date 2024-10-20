
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-font` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=sharp-duotone-solid book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0 32 0L448 0 416 0 384 0 96 0zM250.1 64l4.4 9.1 61.2 128 40.2 84 1.4 2.9-35.5 0-30.6-64-102.3 0-30.6 64-35.5 0 1.4-2.9 40.2-84 61.2-128 4.4-9.1 20.2 0zm25.7 128L240 117.1 204.2 192l71.7 0z" />
    </Icon>
);

export default BookFont;