
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=duotone droplet-slash}
 * @preview ![droplet-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/droplet-slash.svg)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 320c0-27.7 12-62.9 29.8-99.6l298.3 235C421.4 490.4 373.2 512 320 512c-106 0-192-86-192-192zm64 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80c0-8.8-7.2-16-16-16s-16 7.2-16 16zm13.8-200c34.9-54.7 72-103 88.9-124.3C300.6 4.2 309.5 0 319.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C381.8 57.7 512 228.8 512 320c0 17.5-2.4 34.5-6.8 50.7C405.4 292.5 305.6 214.2 205.8 136z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default DropletSlash;