
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-terminal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-terminal?s=sharp-duotone-solid rectangle-terminal}
 * @preview ![rectangle-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-terminal.svg)
 */
const RectangleTerminal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l512 0 0 448L0 480 0 32zM94.1 176l17 17 63 63-63 63-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c26.7-26.7 53.3-53.3 80-80c5.7-5.7 11.3-11.3 17-17l-17-17-80-80-17-17c-11.3 11.3-22.6 22.6-33.9 33.9zM224 336c0 16 0 32 0 48l24 0 144 0 24 0 0-48-24 0-144 0-24 0z" />
        <path d="M111 193l-17-17L128 142.1l17 17 80 80 17 17-17 17-80 80-17 17L94.1 336l17-17 63-63-63-63zM248 336l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default RectangleTerminal;