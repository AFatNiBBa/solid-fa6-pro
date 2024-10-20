
import { Icon } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=sharp-light circle-left}
 * @preview ![circle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-left.svg)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 288l-32 0 0 32 0 18.7L141.3 256 224 173.3l0 18.7 0 32 32 0 96 0 0 64-96 0zM96 256l22.6 22.6L224 384l32 0 0-32 0-32 32 0 64 0 32 0 0-32 0-64 0-32-32 0-64 0-32 0 0-32 0-32-32 0L118.6 233.4 96 256z" />
    </Icon>
);

export default CircleLeft;