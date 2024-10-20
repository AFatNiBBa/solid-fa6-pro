
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=sharp-duotone-solid circle-microphone}
 * @preview ![circle-microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-microphone.svg)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-32l32 0 0 16 0 16c0 53 43 96 96 96s96-43 96-96l0-16 0-16 32 0 0 16 0 16c0 65.3-48.9 119.1-112 127l0 17 0 16-32 0 0-16 0-17c-63.1-7.9-112-61.7-112-127l0-16 0-16zM208 96l96 0 0 160c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-160z" />
        <path d="M304 96l-96 0 0 160c0 26.5 21.5 48 48 48s48-21.5 48-48l0-160zM160 240l0-16-32 0 0 16 0 16c0 65.3 48.9 119.1 112 127l0 17 0 16 32 0 0-16 0-17c63.1-7.9 112-61.7 112-127l0-16 0-16-32 0 0 16 0 16c0 53-43 96-96 96s-96-43-96-96l0-16z" />
    </Icon>
);

export default CircleMicrophone;