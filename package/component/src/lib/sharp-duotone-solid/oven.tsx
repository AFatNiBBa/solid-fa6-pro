
import { Icon, generic } from "../../index";

/**
 * A component that renders the `oven` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=sharp-duotone-solid oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l448 0 0 32-64 0L64 192 0 192l0-32zm64 96l320 0 0 192L64 448l0-192zm32 32l0 32 16 0 224 0 16 0 0-32-16 0-224 0-16 0z" />
        <path d="M448 0l0 160L0 160 0 0 448 0zM80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM200 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM392 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM64 256l0 192 320 0 0-192L64 256zM0 192l64 0 320 0 64 0 0 64 0 192 0 64-64 0L64 512 0 512l0-64L0 256l0-64z" />
    </Icon>
);

export default Oven;