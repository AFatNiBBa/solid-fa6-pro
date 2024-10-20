
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-simple-min` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-min?s=duotone gauge-simple-min}
 * @preview ![gauge-simple-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gauge-simple-min.svg)
 */
const GaugeSimpleMin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm64-8c0-4.3 1.2-8.7 3.6-12.6c7-11.3 21.8-14.8 33-7.8c39.2 24.3 78.4 48.5 117.6 72.8c10.6-7.8 23.7-12.4 37.8-12.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-3.7 .3-7.3 .9-10.8L75.4 268.4C68 263.9 64 256 64 248z" />
        <path d="M100.6 227.6c-11.3-7-26.1-3.5-33 7.8s-3.5 26.1 7.8 33l117.5 72.8c-.6 3.5-.9 7.1-.9 10.8c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-14.1 0-27.2 4.6-37.8 12.4L100.6 227.6z" />
    </Icon>
);

export default GaugeSimpleMin;