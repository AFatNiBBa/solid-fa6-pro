
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-speaker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-speaker?s=sharp-duotone-solid computer-speaker}
 * @preview ![computer-speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/computer-speaker.svg)
 */
const ComputerSpeaker: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96 0 320l0 64 64 0 224 0 0-64L64 320 64 96l224 0 0-64L64 32 0 32zM96 416l0 64 32 0 160 0 0-64-160 0-32 0zM320 32l0 32 0 16 0 352 0 16 0 32 32 0 16 0 272 0 0-448L368 32l-16 0-32 0zM576 320a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM512 128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M64 96l224 0 0 224L64 320 64 96zm384 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-144 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default ComputerSpeaker;