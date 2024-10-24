
import { Icon } from "../../index";

/**
 * A component that renders the `circle-h` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=sharp-light circle-h}
 * @preview ![circle-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-h.svg)
 */
const CircleH: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM368 144l0-16-32 0 0 16 0 96-160 0 0-96 0-16-32 0 0 16 0 96 0 32 0 96 0 16 32 0 0-16 0-96 160 0 0 96 0 16 32 0 0-16 0-112 0-112z" />
    </Icon>
);

export default CircleH;