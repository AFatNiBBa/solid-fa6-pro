
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-left?s=solid circle-down-left}
 * @preview ![circle-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-down-left.svg)
 */
const CircleDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM160 198.6L160 336c0 8.8 7.2 16 16 16l137.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L296 280l66.3-66.3c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-36.7-36.7C322 146 317.1 144 312 144s-10 2-13.7 5.7L232 216l-33.4-33.4c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6z" />
    </Icon>
);

export default CircleDownLeft;