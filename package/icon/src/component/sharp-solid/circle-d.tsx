
import { Icon } from "../../index";

/**
 * A component that renders the `circle-d` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-d?s=sharp-solid circle-d}
 * @preview ![circle-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-d.svg)
 */
const CircleD: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0-24 0 0-24 0-208 0-24 24 0zm72 208c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0 0 160 48 0z" />
    </Icon>
);

export default CircleD;