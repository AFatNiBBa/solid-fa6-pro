
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-simple-high` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-high?s=sharp-duotone-solid gauge-simple-high}
 * @preview ![gauge-simple-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gauge-simple-high.svg)
 */
const GaugeSimpleHigh: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM192 352c0 35.3 28.7 64 64 64c17.7 0 33.7-7.2 45.3-18.7c5.8-5.8 10.5-12.7 13.7-20.3c1.6-3.8 2.9-7.8 3.7-12c.4-2.1 .8-4.2 1-6.4c.1-1.1 .2-2.2 .2-3.2c.1-1.1 .1-2.2 .1-3.3c0-1.5 0-1.5-.1-3c0 0-.1-1.5-.2-2.9c-.2-1.9-.4-3.8-.8-5.7c-.7-3.8-1.7-7.4-3-10.9c-2.6-7-6.5-13.4-11.3-19c25.5-49.1 51.1-98.2 76.6-147.4c3.7-7.1 7.4-14.2 11.1-21.3c-14.2-7.4-28.4-14.8-42.6-22.1c-3.7 7.1-7.4 14.2-11.1 21.3c-25.5 49.1-51.1 98.2-76.6 147.4c-2-.2-4-.3-6.1-.3c-35.3 0-64 28.7-64 64z" />
        <path d="M338.7 140.9l11.1-21.3 42.6 22.1-11.1 21.3L304.7 310.4c9.6 11.2 15.3 25.7 15.3 41.6c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c2.1 0 4.1 .1 6.1 .3l76.6-147.4z" />
    </Icon>
);

export default GaugeSimpleHigh;