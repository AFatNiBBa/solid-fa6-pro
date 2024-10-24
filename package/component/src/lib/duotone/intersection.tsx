
import { Icon, generic } from "../../index";

/**
 * A component that renders the `intersection` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=duotone intersection}
 * @preview ![intersection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/intersection.svg)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 480c17.7 0 32-14.3 32-32l0-224c0-70.7 57.3-128 128-128s128 57.3 128 128l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224c0-106-86-192-192-192S0 118 0 224L0 448c0 17.7 14.3 32 32 32z" />
    </Icon>
);

export default Intersection;