
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=regular circle-up-left}
 * @preview ![circle-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-up-left.svg)
 */
const CircleUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 313.4c0 12.5 10.1 22.6 22.6 22.6c6 0 11.8-2.4 16-6.6L232 296l66.3 66.3c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l36.7-36.7c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7L296 232l33.4-33.4c4.2-4.2 6.6-10 6.6-16c0-12.5-10.1-22.6-22.6-22.6L176 160c-8.8 0-16 7.2-16 16l0 137.4z" />
    </Icon>
);

export default CircleUpLeft;