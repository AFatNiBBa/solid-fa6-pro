
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=sharp-light book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160A96 96 0 1 0 256 0a96 96 0 1 0 0 192zm0 48s-56.8-42.6-224-47.5c-10.2-.3-20.9-.5-32-.5l0 32L0 432l0 32c160 0 256 48 256 48s96-48 256-48l0-32 0-208 0-32c-11.1 0-21.8 .2-32 .5C312.8 197.4 256 240 256 240zm224-15.5l0 208.1c-68.5 2.7-124.2 13.5-164.4 24.5c-17.5 4.8-32.1 9.6-43.6 13.7L272 268l2.9-2.2c.2-.1 .5-.3 1.1-.7c1.3-.8 3.7-2.2 7.4-4c7.3-3.6 19.6-9 37.9-14.5c32.2-9.7 83.3-19.9 158.8-22.2zM240 470.9c-11.5-4.2-26.1-9-43.6-13.7c-40.3-11-96-21.8-164.4-24.5l0-208.1c75.5 2.3 126.6 12.5 158.8 22.2c18.3 5.5 30.6 10.8 37.9 14.5c3.7 1.8 6.1 3.2 7.4 4c.6 .3 .9 .6 1.1 .7L240 268l0 202.9z" />
    </Icon>
);

export default BookOpenReader;