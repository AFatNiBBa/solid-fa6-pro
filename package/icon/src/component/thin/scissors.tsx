
import { Icon } from "../../index";

/**
 * A component that renders the `scissors` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=thin scissors}
 * @preview ![scissors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/scissors.svg)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path d="M510.1 445.2c2.9-3.4 2.4-8.4-.9-11.3l-179.6-152c-3.4-2.9-8.4-2.4-11.3 .9s-2.4 8.4 .9 11.3l179.6 152c3.4 2.9 8.4 2.4 11.3-.9zM286.5 245.5l-82.5-69.8C216.6 157.7 224 135.7 224 112C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c32.4 0 61.6-13.8 82.1-35.8L274.2 256l-80.1 67.8c-20.5-22-49.6-35.8-82.1-35.8C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-23.7-7.4-45.7-19.9-63.8L509.2 78.1c3.4-2.9 3.8-7.9 .9-11.3s-7.9-3.8-11.3-.9L286.5 245.5zM112 208a96 96 0 1 1 0-192 96 96 0 1 1 0 192zm0 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Scissors;