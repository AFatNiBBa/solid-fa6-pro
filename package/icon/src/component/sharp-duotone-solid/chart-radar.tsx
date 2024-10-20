
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-radar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-radar?s=sharp-duotone-solid chart-radar}
 * @preview ![chart-radar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-radar.svg)
 */
const ChartRadar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-5 256l9.4 16.1 112 192 9.3 15.9 18.4 0 224 0 18.4 0 9.3-15.9 112-192L517 256l-9.4-16.1-112-192L386.4 32 368 32 144 32l-18.4 0-9.3 15.9-112 192L-5 256zM69 256L162.4 96l187.2 0L443 256 349.6 416l-187.2 0L69 256z" />
        <path d="M290.2 180.8c3.7-6.1 5.8-13.2 5.8-20.8c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 3.9 .6 7.7 1.6 11.2L160 248c-22.1 0-40 17.9-40 40s17.9 40 40 40c10.2 0 19.6-3.9 26.7-10.2l97.2 19.4c6.4 13.5 20.2 22.7 36.1 22.7c22.1 0 40-17.9 40-40c0-18.5-12.6-34.1-29.6-38.6L290.2 180.8zm-8.9 107L202 271.9l47.5-63.4 31.7 79.2z" />
    </Icon>
);

export default ChartRadar;