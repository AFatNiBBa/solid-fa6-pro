
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-hand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-hand?s=sharp-duotone-solid hand-holding-hand}
 * @preview ![hand-holding-hand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-holding-hand.svg)
 */
const HandHoldingHand: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M8.4 149.7l45.3 65.9 33-22.7 94.5-65L320 128l0 32-32 0-64 0-32 0 0 64 32 0 64 0 64 0 64 0 11.2 0 8.8-7 71.2-57 68.8 0 0-128-32 0L352 32 192 32l-12.4 0-10.2 7-128 88-33 22.7z" />
        <path d="M68.8 352L140 295l8.8-7 11.2 0 64 0 64 0 64 0 32 0 0 64-32 0-64 0-32 0 0 32 138.8 0 94.5-65 33-22.7 45.3 65.9-33 22.7-128 88-10.2 7L384 480l-160 0L32 480 0 480 0 352l68.8 0z" />
    </Icon>
);

export default HandHoldingHand;