
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=sharp-thin book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 96a80 80 0 1 1 160 0A80 80 0 1 1 176 96zm176 0A96 96 0 1 0 160 96a96 96 0 1 0 192 0zM256 240s-63.4-45.3-240-47.9c-5.2-.1-10.6-.1-16-.1l0 16L0 448l0 16c160 0 256 48 256 48s96-48 256-48l0-16 0-240 0-16c-5.4 0-10.8 0-16 .1C316.4 194.7 256 240 256 240zm240-31.9l0 240c-74.2 1.5-134 12.9-176.2 24.4c-22.6 6.2-40.1 12.3-52.1 17c-1.3 .5-2.5 1-3.7 1.5L264 254l1.5-1.1 .3-.2c.3-.2 .9-.6 1.8-1.1c1.7-1.1 4.5-2.7 8.6-4.7c8.1-4.1 21.3-9.7 40.4-15.5c36.1-10.8 93.6-22 179.4-23.2zm-249.2 45l1.2 .9 0 237.1c-1.2-.5-2.4-1-3.7-1.5c-12-4.7-29.5-10.9-52.1-17C150 461.1 90.2 449.6 16 448.2l0-240c84.3 1.3 141.8 12.4 178.2 23.2c19.4 5.8 32.9 11.4 41.3 15.6c4.2 2.1 7.2 3.7 9 4.8c.9 .5 1.5 .9 1.9 1.2l.3 .2s0 0 0 0s0 0 0 0s0 0 0 0z" />
    </Icon>
);

export default BookOpenReader;