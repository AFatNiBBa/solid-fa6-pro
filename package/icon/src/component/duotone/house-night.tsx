
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-night` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-night?s=duotone house-night}
 * @preview ![house-night](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-night.svg)
 */
const HouseNight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 112c0 61.9 50.1 112 112 112c32.1 0 61.1-13.5 81.5-35.2c5.2-5.6-1-14-8.6-13.2c-2.9 .3-5.9 .4-9 .4c-48.6 0-88-39.4-88-88c0-29.7 14.7-55.9 37.2-71.9c6.2-4.4 5.4-14.8-2.2-15.6c-3.6-.4-7.3-.5-11-.5C50.1 0 0 50.1 0 112zM44.3 376.5c-7 2.6-7 12.4 0 15l32.3 11.9 11.9 32.3c1.3 3.5 4.4 5.2 7.5 5.2s6.2-1.7 7.5-5.2l11.9-32.3 32.3-11.9c7-2.6 7-12.4 0-15l-32.3-11.9-11.9-32.3c-2.6-7-12.4-7-15 0L76.6 364.6 44.3 376.5zm160-320c-7 2.6-7 12.4 0 15l32.3 11.9 11.9 32.3c2.6 7 12.4 7 15 0l11.9-32.3 32.3-11.9c3.5-1.3 5.2-4.4 5.2-7.5s-1.7-6.2-5.2-7.5L275.4 44.6 263.5 12.3c-2.6-7-12.4-7-15 0L236.6 44.6 204.3 56.5z" />
        <path d="M378.3 104.5c12.3-11.3 31.2-11.3 43.4 0l208 192c9.7 8.9 12.9 22.9 8.1 35.2S621.2 352 608 352l-32 0 0 112c0 26.5-21.5 48-48 48l-256 0c-26.5 0-48-21.5-48-48l0-112-32 0c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM368 288c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-64 0z" />
    </Icon>
);

export default HouseNight;