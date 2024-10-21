
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-day` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-day?s=duotone house-day}
 * @preview ![house-day](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-day.svg)
 */
const HouseDay: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M-.1 160.2c0 5.9 3.2 11.3 8.4 14.1l51.2 27.6L42.8 257.6c-1.7 5.6-.1 11.7 4 15.9s10.3 5.7 15.9 4l55.7-16.7L133.1 288l15.7-14.5 41.7-38.5c-9.4 3.9-19.7 6-30.5 6c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80c0 13.1-3.1 25.4-8.7 36.3L296 137.5l-35.3-19 16.7-55.7c1.7-5.6 .1-11.7-4-15.9s-10.3-5.7-15.9-4L201.8 59.5 174.2 8.3C171.4 3.2 166-.1 160.1-.1s-11.3 3.2-14.1 8.4L118.4 59.5 62.8 42.9c-5.6-1.7-11.7-.1-15.9 4s-5.7 10.3-4 15.9l16.7 55.7L8.3 146.1c-5.2 2.8-8.4 8.2-8.4 14.1zM112 160a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M378.3 104.5c12.3-11.3 31.2-11.3 43.4 0l208 192c9.7 8.9 12.9 22.9 8.1 35.2S621.2 352 608 352l-32 0 0 112c0 26.5-21.5 48-48 48l-256 0c-26.5 0-48-21.5-48-48l0-112-32 0c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM368 288c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-64 0z" />
    </Icon>
);

export default HouseDay;