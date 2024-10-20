
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-water` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-water?s=duotone glass-water}
 * @preview ![glass-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/glass-water.svg)
 */
const GlassWater: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32c0 .8 0 1.5 .1 2.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3l166.6 0c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.1-.8 .1-1.5 .1-2.3c0-8.1-3-15.9-8.6-21.8C369.4 3.7 360.9 0 352 0L32 0C23.1 0 14.6 3.7 8.6 10.2C3 16.1 0 23.9 0 32zM66.4 64l251.3 0c-2.2 30.8-4.4 61.7-6.6 92.5c-6.6 92.2-13.2 184.4-19.8 276.7c-.6 8.4-7.6 14.9-16 14.9l-166.6 0c-8.4 0-15.4-6.5-16-14.9C86.1 340.9 79.6 248.7 73 156.5c-2.2-30.8-4.4-61.7-6.6-92.5z" />
        <path d="M311 156.5l-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0c-20.9-10.4-45.5-10.4-66.4 0c-19.4 9.7-42.2 9.7-61.6 0L73 156.5 92.7 433.1c.6 8.4 7.6 14.9 16 14.9l166.6 0c8.4 0 15.4-6.5 16-14.9L311 156.5z" />
    </Icon>
);

export default GlassWater;