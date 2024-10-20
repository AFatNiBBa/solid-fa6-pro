
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=duotone book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96a96 96 0 1 0 192 0A96 96 0 1 0 160 96z" />
        <path d="M240 512l0-264c-52.1-36.4-114.1-56-177.7-56L32 192c-17.7 0-32 14.3-32 32L0 427c0 16.4 12.5 30.2 28.8 31.8l96 9.6c23.2 2.3 45.9 8.9 66.8 19.3L240 512zm32 0l48.4-24.2c20.9-10.4 43.5-17 66.8-19.3l96-9.6c16.4-1.6 28.8-15.4 28.8-31.8l0-203c0-17.7-14.3-32-32-32l-30.3 0c-63.6 0-125.6 19.6-177.7 56l0 264z" />
    </Icon>
);

export default BookOpenReader;