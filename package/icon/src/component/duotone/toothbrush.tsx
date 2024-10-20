
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toothbrush` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toothbrush?s=duotone toothbrush}
 * @preview ![toothbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toothbrush.svg)
 */
const Toothbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 280l0 136 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 0l0 136 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 0l0 136 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 0l0 136 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 0l0 136 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M64 224c-35.3 0-64-28.7-64-64s28.7-64 64-64l224 0c31.2 0 38.2-22.7 39.6-48c.5-8.8 7.6-16.1 16.4-15.2c52.4 5.3 104 36.7 104 95.2c0 53-43 96-96 96L64 224zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default Toothbrush;