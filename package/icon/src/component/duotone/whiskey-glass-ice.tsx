
import { Icon, generic } from "../../index";

/**
 * A component that renders the `whiskey-glass-ice` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass-ice?s=duotone whiskey-glass-ice}
 * @preview ![whiskey-glass-ice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/whiskey-glass-ice.svg)
 */
const WhiskeyGlassIce: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.3 68.6l50 342.9c5.7 39.3 39.4 68.5 79.2 68.5l253 0c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32L32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4 .3 68.6zM69 96l374 0c-4.7 32-9.3 64-14 96c-10.2 70.1-20.4 140.2-30.7 210.3c-1.1 7.9-7.9 13.7-15.8 13.7l-253 0c-7.9 0-14.7-5.8-15.8-13.7L83 192c-4.7-32-9.3-64-14-96z" />
        <path d="M83 192l346 0L398.3 402.3c-1.1 7.9-7.9 13.7-15.8 13.7l-253 0c-7.9 0-14.7-5.8-15.8-13.7L83 192zm93 32c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32l48 0c3.4 0 6.6-.5 9.7-1.5c-1.1-4.4-1.7-9-1.7-13.7l0-1.7c0-14.9 5.9-29.1 16.4-39.6L256 272l0-16c0-17.7-14.3-32-32-32l-48 0zm89.4 72.5c-6 6-9.4 14.1-9.4 22.6l0 1.7c0 8.5 3.4 16.6 9.4 22.6l31.2 31.2c6 6 14.1 9.4 22.6 9.4l1.7 0c8.5 0 16.6-3.4 22.6-9.4l31.2-31.2c6-6 9.4-14.1 9.4-22.6l0-1.7c0-8.5-3.4-16.6-9.4-22.6l-31.2-31.2c-6-6-14.1-9.4-22.6-9.4l-1.7 0c-8.5 0-16.6 3.4-22.6 9.4l-31.2 31.2z" />
    </Icon>
);

export default WhiskeyGlassIce;