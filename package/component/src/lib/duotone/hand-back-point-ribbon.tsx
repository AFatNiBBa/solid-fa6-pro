
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-back-point-ribbon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-point-ribbon?s=duotone hand-back-point-ribbon}
 * @preview ![hand-back-point-ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-back-point-ribbon.svg)
 */
const HandBackPointRibbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 334L32 372c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1L304 512c70.7 0 128-57.3 128-128l0-64 0-32c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 227.5 329.3 208 304 208c-12.4 0-23.6 4.7-32.1 12.3C270 195.5 249.3 176 224 176c-12.3 0-23.5 4.6-32 12.2l0-28.2-80 0 0 80 0 7 0 73c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-55.7c-2 1.4-3.9 3-5.8 4.5L55 284.8C40.4 297 32 315 32 334zM112.8 32l78.4 0C187.5 13.7 171.4 0 152 0s-35.5 13.7-39.2 32z" />
        <path d="M224 112V48c0-8.8-7.2-16-16-16H43.8C37.3 32 32 37.3 32 43.8c0 3.9 1.9 7.5 5.1 9.7L75.6 80 37.1 106.5c-3.2 2.2-5.1 5.8-5.1 9.7c0 6.5 5.3 11.8 11.8 11.8H208c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default HandBackPointRibbon;