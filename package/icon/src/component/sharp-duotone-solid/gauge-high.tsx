
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-high` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-high?s=sharp-duotone-solid gauge-high}
 * @preview ![gauge-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gauge-high.svg)
 */
const GaugeHigh: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm16 208c0-35.3 28.7-64 64-64c.6 0 1.3 0 1.9 0c21.4-48.6 42.7-97.1 64.1-145.7c3.2-7.3 6.4-14.7 9.7-22l43.9 19.3c-3.2 7.3-6.4 14.6-9.7 22c-21.4 48.6-42.7 97.1-64.1 145.7c5.6 5.8 10.1 12.6 13.3 20.1c1.6 3.8 2.8 7.8 3.6 11.9c.2 1.1 .4 2.1 .5 3.2c.1 .8 .2 1.6 .3 2.4c0 .3 .1 .6 .1 .8c.1 .9 .1 1.7 .2 2.4c0 .3 0 .5 0 .6c0 1 .1 1.8 .1 2.6c0 .2 0 .4 0 .6s0 .4 0 .6c0 .9 0 1.7-.1 2.7c0 .1 0 .3 0 .6c0 .7-.1 1.6-.2 2.5c0 .2-.1 .5-.1 .8c-.1 .8-.2 1.8-.4 2.7c-.2 1-.4 2.1-.6 3.2c-.9 4.1-2.1 8.1-3.7 12c-3.2 7.6-7.9 14.5-13.7 20.3C289.7 408.8 273.7 416 256 416c-35.3 0-64-28.7-64-64zM288 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM448 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M322 142.3l9.7-22 43.9 19.3-9.7 22L301.9 307.4C313.1 318.9 320 334.6 320 352c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c.6 0 1.3 0 1.9 0L322 142.3z" />
    </Icon>
);

export default GaugeHigh;