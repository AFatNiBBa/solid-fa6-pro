
import { Icon } from "../../index";

/**
 * A component that renders the `circle-w` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-w?s=sharp-light circle-w}
 * @preview ![circle-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-w.svg)
 */
const CircleW: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM104.6 160l72.2 228.8 3.5 11.2 23.4 0 3.6-11.1L256 236.5l48.8 152.4 3.6 11.1 23.4 0 3.5-11.2L407.4 160l-33.6 0-54 171.2-48.7-152L265.1 160l-18.2 0-6.1 19.1-48.7 152L138.1 160l-33.6 0z" />
    </Icon>
);

export default CircleW;