
import { Icon } from "../../index";

/**
 * A component that renders the `circle-2` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-2?s=sharp-thin circle-2}
 * @preview ![circle-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-2.svg)
 */
const Circle_2: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm3-367.6l2.3 0c32.6 .5 58.8 27 58.8 59.6c0 15.8-6.3 31-17.5 42.2L178.3 370.3l-2.3 2.3 0 11.3 8 0 160 0 8 0 0-16-8 0-140.7 0L313.9 257.5C328 243.3 336 224 336 204c0-41.3-33.2-75-74.5-75.6l-2.3 0c-18.1-.3-35.7 5.8-49.8 17.1L179 169.8l-6.2 5 10 12.5 6.2-5 30.4-24.3c11.2-9 25.2-13.8 39.6-13.6z" />
    </Icon>
);

export default Circle_2;