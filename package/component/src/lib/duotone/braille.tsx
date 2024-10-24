
import { Icon, generic } from "../../index";

/**
 * A component that renders the `braille` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/braille?s=duotone braille}
 * @preview ![braille](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/braille.svg)
 */
const Braille: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416a64 64 0 1 0 128 0A64 64 0 1 0 0 416zm80 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm80-160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm0 160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm80-160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM352 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm0 160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm80-160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM512 96a64 64 0 1 0 128 0A64 64 0 1 0 512 96zm0 160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm0 160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM592 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M64 160A64 64 0 1 0 64 32a64 64 0 1 0 0 128zm0 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM288 96A64 64 0 1 0 160 96a64 64 0 1 0 128 0zm128 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Braille;