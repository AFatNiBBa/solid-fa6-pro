
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stairs` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=duotone stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M128 352l0 64 64 0 0-64-64 0zM256 224l0 64 64 0 0-64-64 0zM384 96l0 64 64 0 0-64-64 0z" />
        <path d="M416 32c-17.7 0-32 14.3-32 32l0 32 64 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L416 32zM384 160l-96 0c-17.7 0-32 14.3-32 32l0 32 64 0 96 0c17.7 0 32-14.3 32-32l0-32-64 0zM160 288c-17.7 0-32 14.3-32 32l0 32 64 0 96 0c17.7 0 32-14.3 32-32l0-32-64 0-96 0zm32 128l-64 0-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32z" />
    </Icon>
);

export default Stairs;