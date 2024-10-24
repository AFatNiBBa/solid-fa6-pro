
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-simple-high` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-high?s=duotone gauge-simple-high}
 * @preview ![gauge-simple-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gauge-simple-high.svg)
 */
const GaugeSimpleHigh: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM192 352c0 35.3 28.7 64 64 64c17.7 0 33.7-7.2 45.3-18.7c5.8-5.8 10.5-12.7 13.7-20.3c1.6-3.8 2.9-7.8 3.7-12c.4-2.1 .8-4.2 1-6.3c.1-1.1 .2-2.2 .2-3.2c.1-1.1 .1-2.2 .1-3.3l0-.4c0-.7 0-1.6-.1-2.6s-.1-1.9-.2-2.9c-.2-1.9-.4-3.9-.8-5.7c-.7-3.8-1.7-7.4-3-10.9c-2.6-7-6.5-13.4-11.3-19c25.5-49.1 51.1-98.2 76.6-147.4c1.8-3.5 2.7-7.3 2.7-11.1c0-8.7-4.7-17-12.9-21.3c-11.8-6.1-26.2-1.5-32.4 10.2L262.1 288.3c-2-.2-4-.3-6.1-.3c-35.3 0-64 28.7-64 64z" />
        <path d="M338.7 140.9c6.1-11.8 20.6-16.3 32.4-10.2s16.3 20.6 10.2 32.4L304.7 310.4c9.6 11.2 15.3 25.7 15.3 41.6c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c2.1 0 4.1 .1 6.1 .3l76.6-147.4z" />
    </Icon>
);

export default GaugeSimpleHigh;