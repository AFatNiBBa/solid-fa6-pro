
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=sharp-light circle-up}
 * @preview ![circle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-up.svg)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 256l0-32-32 0-18.7 0L256 141.3 338.7 224 320 224l-32 0 0 32 0 96-64 0 0-96zM256 96l-22.6 22.6L128 224l0 32 32 0 32 0 0 32 0 64 0 32 32 0 64 0 32 0 0-32 0-64 0-32 32 0 32 0 0-32L278.6 118.6 256 96z" />
    </Icon>
);

export default CircleUp;