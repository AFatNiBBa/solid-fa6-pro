
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=sharp-regular typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M104 0L80 0l0 24 0 136 48 0 0-112 214.1 0L384 89.9l0 70.1 48 0 0-80 0-9.9-7-7L369 7l-7-7L352 0 104 0zM0 192l0 96 32 0 0 176 0 48 48 0 352 0 48 0 0-48 0-176 32 0 0-96-160 0-32 32-128 0-32-32L0 192zm80 96l352 0 0 176L80 464l0-176zm48 96l0 48 256 0 0-48-256 0zm40-64l-40 0 0 40 40 0 0-40zm32 0l0 40 40 0 0-40-40 0zm112 0l-40 0 0 40 40 0 0-40zm32 0l0 40 40 0 0-40-40 0z" />
    </Icon>
);

export default Typewriter;