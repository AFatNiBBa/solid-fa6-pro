
import { Icon, generic } from "../../index";

/**
 * A component that renders the `champagne-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/champagne-glass?s=duotone champagne-glass}
 * @preview ![champagne-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/champagne-glass.svg)
 */
const ChampagneGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32.2 224.5c0 58.6 40.2 109.2 95.8 123.5l0 100-48 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0-100c55.6-14.3 95.8-64.9 95.8-123.5c0-5.4-.3-10.9-1.1-16.4l-23-180.1C261.7 12 248.1 0 232 0L88 0C71.9 0 58.3 12 56.3 27.9L33.2 208c-.7 5.5-1.1 11-1.1 16.4zm64.5-8.3c3.8-29.4 7.5-58.7 11.3-88.1l8.2-64 87.7 0c2.7 21.3 5.5 42.7 8.2 64c3.8 29.4 7.5 58.8 11.3 88.1c4.9 38.1-24.8 71.9-63.3 71.9s-68.1-33.7-63.3-71.9z" />
        <path d="M212 128l-104 0L96.7 216.1C91.9 254.3 121.6 288 160 288s68.1-33.7 63.3-71.9L212 128z" />
    </Icon>
);

export default ChampagneGlass;