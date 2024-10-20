
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ski-boot-ski` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ski-boot-ski?s=duotone ski-boot-ski}
 * @preview ![ski-boot-ski](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ski-boot-ski.svg)
 */
const SkiBootSki: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 17.7 14.3 32 32 32l512 0c53 0 96-43 96-96c0-17.7-14.3-32-32-32s-32 14.3-32 32s-14.3 32-32 32L32 448c-17.7 0-32 14.3-32 32zM116.8 237c39.8-9.3 125.1-47.4 152.7-205c-28.5 0-57 0-85.5 0c-15.3 0-28.4 10.8-31.4 25.7c-12 59.8-23.9 119.6-35.9 179.3z" />
        <path d="M415.4 38.3c3.5-17.3-7.8-34.2-25.1-37.7s-34.2 7.8-37.7 25.1L351.4 32l-81.9 0c-27.6 157.6-113 195.8-152.7 205L88.6 377.7c-1.9 9.4 .6 19.1 6.6 26.6s15.2 11.7 24.7 11.7l328 0c17.7 0 32-14.3 32-32l0-80c0-12.7-7.5-24.2-19.1-29.3L382.2 240 320 240c-8.8 0-16-7.2-16-16s7.2-16 16-16l61.4 0 9.6-48-55 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l61.4 0L409 70.3l6.4-32z" />
    </Icon>
);

export default SkiBootSki;