
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sprinkler-ceiling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler-ceiling?s=duotone sprinkler-ceiling}
 * @preview ![sprinkler-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sprinkler-ceiling.svg)
 */
const SprinklerCeiling: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 472a24 24 0 1 0 48 0A24 24 0 1 0 0 472zm64-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm56-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm56-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm64 64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M0 96c0 15.3 10.8 28.4 25.7 31.4L128 147.8l0-65.3L64 69.8 64 0 0 0 0 96zm256 51.8l102.3-20.5c15-3 25.7-16.1 25.7-31.4l0-96L320 0l0 69.8L256 82.6l0 65.3zM224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-128z" />
    </Icon>
);

export default SprinklerCeiling;