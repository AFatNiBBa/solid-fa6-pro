
import { Icon } from "../../index";

/**
 * A component that renders the `circle-d` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-d?s=regular circle-d}
 * @preview ![circle-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-d.svg)
 */
const CircleD: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24l0 208c0 13.3 10.7 24 24 24l72 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-72 0zm72 208l-48 0 0-160 48 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default CircleD;