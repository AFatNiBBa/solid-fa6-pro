
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-simple-max` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-max?s=duotone gauge-simple-max}
 * @preview ![gauge-simple-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gauge-simple-max.svg)
 */
const GaugeSimpleMax: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM192.3 345.4c-.1 1.1-.2 2.2-.2 3.2c-.1 1.1-.1 2.2-.1 3.3s0 2.2 .1 3.3c.1 1.1 .1 2.2 .2 3.2c.2 2.1 .5 4.3 1 6.4c.9 4.2 2.1 8.2 3.7 12c3.2 7.7 7.9 14.6 13.7 20.3C222.3 408.8 238.3 416 256 416c35.3 0 64-28.7 64-64c0-3.7-.3-7.3-.9-10.8c39.2-24.3 78.4-48.5 117.5-72.8c11.3-7 14.7-21.8 7.8-33s-21.8-14.8-33-7.8c-39.2 24.3-78.4 48.5-117.6 72.8C283.2 292.6 270.1 288 256 288c-17.7 0-33.7 7.2-45.3 18.7c-5.8 5.8-10.5 12.7-13.7 20.3c-1.6 3.8-2.9 7.8-3.7 12c-.4 2.1-.8 4.2-1 6.3z" />
        <path d="M411.4 227.6c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33L319.1 341.2c.6 3.5 .9 7.1 .9 10.8c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c14.1 0 27.2 4.6 37.8 12.4l117.6-72.8z" />
    </Icon>
);

export default GaugeSimpleMax;