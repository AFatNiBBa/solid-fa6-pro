
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-water` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-water?s=sharp-duotone-solid glass-water}
 * @preview ![glass-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/glass-water.svg)
 */
const GlassWater: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L5 64 40 512l304 0L379 64l5-64L319.8 0 64.2 0 0 0zM69.2 64l245.6 0c-2.5 31.4-4.9 62.9-7.4 94.3L284.8 448 99.2 448 76.6 158.3c-2.5-31.4-4.9-62.9-7.4-94.3z" />
        <path d="M76.6 158.3L99.2 448l185.6 0 22.6-289.7-20.6 10.3c-19.4 9.7-42.2 9.7-61.6 0c-20.9-10.4-45.5-10.4-66.4 0c-19.4 9.7-42.2 9.7-61.6 0L76.6 158.3z" />
    </Icon>
);

export default GlassWater;