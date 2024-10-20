
import { Icon, generic } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=sharp-duotone-solid xmark-to-slot}
 * @preview ![xmark-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/xmark-to-slot.svg)
 */
const XmarkToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 256 0 80 0 32 384 0 0-32 0-80 0-256L96 32zm94.1 120c11.3-11.3 22.6-22.6 33.9-33.9c5.7 5.7 11.3 11.3 17 17c15.7 15.7 31.4 31.4 47 47c15.7-15.7 31.4-31.4 47-47c5.7-5.7 11.3-11.3 17-17L385.9 152c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.4 31.4-47 47c15.7 15.7 31.4 31.4 47 47c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.4-47-47c-15.7 15.7-31.4 31.4-47 47c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M385.9 152l-17 17-47 47 47 47 17 17L352 313.9l-17-17-47-47-47 47-17 17L190.1 280l17-17 47-47-47-47-17-17L224 118.1l17 17 47 47 47-47 17-17L385.9 152zM0 288l96 0 0 80-32 0 0 32 448 0 0-32-32 0 0-80 96 0 0 192L0 480 0 288z" />
    </Icon>
);

export default XmarkToSlot;