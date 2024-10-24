
import { Icon } from "../../index";

/**
 * A component that renders the `circle-2` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-2?s=thin circle-2}
 * @preview ![circle-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-2.svg)
 */
const Circle_2: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM219.4 157.9c11.2-9 25.2-13.8 39.6-13.6l2.3 0c32.6 .5 58.8 27 58.8 59.6c0 15.8-6.3 31-17.5 42.2L178.3 370.3c-2.3 2.3-3 5.7-1.7 8.7s4.2 4.9 7.4 4.9l160 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-140.7 0L313.9 257.5C328 243.3 336 224 336 204c0-41.3-33.2-75-74.5-75.6l-2.3 0c-18.1-.3-35.7 5.8-49.8 17.1L179 169.8c-3.5 2.8-4 7.8-1.2 11.2s7.8 4 11.2 1.2l30.4-24.3z" />
    </Icon>
);

export default Circle_2;