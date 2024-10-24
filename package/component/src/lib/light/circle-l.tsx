
import { Icon } from "../../index";

/**
 * A component that renders the `circle-l` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=light circle-l}
 * @preview ![circle-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-l.svg)
 */
const CircleL: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 208c0 17.7 14.3 32 32 32l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-144 0 0-208z" />
    </Icon>
);

export default CircleL;