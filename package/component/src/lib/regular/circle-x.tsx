
import { Icon } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=regular circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM186.3 136.5c-8.6-10.1-23.7-11.4-33.8-2.8s-11.4 23.7-2.8 33.8L224.6 256l-74.9 88.5c-8.6 10.1-7.3 25.3 2.8 33.8s25.3 7.3 33.8-2.8L256 293.2l69.7 82.3c8.6 10.1 23.7 11.4 33.8 2.8s11.4-23.7 2.8-33.8L287.4 256l74.9-88.5c8.6-10.1 7.3-25.3-2.8-33.8s-25.3-7.3-33.8 2.8L256 218.8l-69.7-82.3z" />
    </Icon>
);

export default CircleX;