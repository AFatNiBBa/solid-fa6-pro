
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=duotone wave-triangle}
 * @preview ![wave-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wave-triangle.svg)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M176 32c10.1 0 19.6 4.7 25.6 12.8L464 394.7 582.4 236.8c10.6-14.1 30.7-17 44.8-6.4s17 30.7 6.4 44.8l-144 192c-6 8.1-15.5 12.8-25.6 12.8s-19.6-4.7-25.6-12.8L176 117.3 57.6 275.2c-10.6 14.1-30.7 17-44.8 6.4s-17-30.7-6.4-44.8l144-192c6-8.1 15.5-12.8 25.6-12.8z" />
    </Icon>
);

export default WaveTriangle;