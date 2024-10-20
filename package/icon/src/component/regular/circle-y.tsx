
import { Icon } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=regular circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM170.1 152.3c-8.7-10-23.8-11.1-33.9-2.4s-11.1 23.8-2.4 33.9L232 297l0 79c0 13.3 10.7 24 24 24s24-10.7 24-24l0-79 98.1-113.2c8.7-10 7.6-25.2-2.4-33.9s-25.2-7.6-33.9 2.4L256 251.4l-85.9-99.1z" />
    </Icon>
);

export default CircleY;