
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=light book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160A96 96 0 1 0 256 0a96 96 0 1 0 0 192zm0 48s-56.8-42.6-224-47.5C14.4 191.9 0 206.3 0 224L0 432c0 17.7 14.4 31.9 32 32.7c114.9 4.7 186.9 33.7 208.8 43.8c4.8 2.2 9.9 3.5 15.1 3.5s10.4-1.3 15.1-3.5c21.9-10.1 93.9-39.1 208.8-43.8c17.7-.7 32-15 32-32.7l0-208c0-17.7-14.4-32.1-32-31.5C312.8 197.4 256 240 256 240zm-18.9 25.8L240 268l0 205.3c-34-13.8-104.4-36.4-206.7-40.6c-.5 0-.9-.2-1.2-.5c-.1-.1-.1-.1-.1-.2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0l0-207.5c80.5 2.4 133.2 13.9 164.9 24.1c15.9 5.1 26.7 9.9 33 13.2c3.2 1.6 5.3 2.9 6.4 3.6c.4 .3 .7 .5 .9 .6zM272 268l2.9-2.2c.1-.1 .4-.3 .9-.6c1.1-.7 3.2-1.9 6.4-3.6c6.3-3.3 17-8.1 33-13.2c31.8-10.2 84.5-21.6 164.9-24.1L480 432s0 0 0 0c0 0 0 0 0 .1c0 0-.1 .1-.1 .1c-.3 .3-.7 .5-1.2 .5C376.4 436.9 306 459.5 272 473.3L272 268z" />
    </Icon>
);

export default BookOpenReader;