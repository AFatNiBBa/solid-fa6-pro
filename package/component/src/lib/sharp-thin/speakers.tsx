
import { Icon } from "../../index";

/**
 * A component that renders the `speakers` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=sharp-thin speakers}
 * @preview ![speakers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/speakers.svg)
 */
const Speakers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 16l240 0 0-16L16 0 0 0 0 16 0 496l0 16 16 0 240 0 0-16L16 496 16 16zM176 224c-61.9 0-112 50.1-112 112s50.1 112 112 112c31.3 0 59.7-12.9 80-33.6l0-25.3C238.8 415 209.4 432 176 432c-53 0-96-43-96-96s43-96 96-96c33.4 0 62.8 17 80 42.9l0-25.3c-20.3-20.7-48.7-33.6-80-33.6zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM128 128a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM624 16l0 480-320 0 0-480 320 0zM304 0L288 0l0 16 0 480 0 16 16 0 320 0 16 0 0-16 0-480 0-16L624 0 304 0zM464 240a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 208a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM432 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM464 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Speakers;