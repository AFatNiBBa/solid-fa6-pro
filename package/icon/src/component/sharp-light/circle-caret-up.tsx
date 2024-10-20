
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-up?s=sharp-light circle-caret-up}
 * @preview ![circle-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-caret-up.svg)
 */
const CircleCaretUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 320l32 0 192 0 32 0 0-32 0-8L256 160 128 280l0 8 0 32zM256 203.9L345.7 288l-179.5 0L256 203.9z" />
    </Icon>
);

export default CircleCaretUp;