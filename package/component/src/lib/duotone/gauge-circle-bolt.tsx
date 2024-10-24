
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-circle-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-circle-bolt?s=duotone gauge-circle-bolt}
 * @preview ![gauge-circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gauge-circle-bolt.svg)
 */
const GaugeCircleBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c39.5 0 77-9 110.4-25C337.6 455.7 320 413.9 320 368c0-97.2 78.8-176 176-176c2.7 0 5.3 .1 8 .2C475.6 81.7 375.4 0 256 0C114.6 0 0 114.6 0 256zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm16 208c0-26.9 16.5-49.9 40-59.3L232 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 204.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM400 144a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm194.5-66.2c2.8-5 1.7-11.1-2.6-14.9s-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2l35.6 0-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1 .6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2l-35.6 0 30.1-54.2z" />
    </Icon>
);

export default GaugeCircleBolt;