
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-middle-finger` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-middle-finger?s=duotone hand-middle-finger}
 * @preview ![hand-middle-finger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-middle-finger.svg)
 */
const HandMiddleFinger: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M232 0c-22.1 0-40 17.9-40 40l0 164.2c-8.5-7.6-19.7-12.2-32-12.2c-26.5 0-48 21.5-48 48l0 7 0 73c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-55.7c-2 1.4-3.9 3-5.8 4.5L55 284.8C40.4 297 32 315 32 334L32 372c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1L304 512c70.7 0 128-57.3 128-128l0-64 0-32c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 227.5 329.3 208 304 208c-12.3 0-23.5 4.6-32 12.2L272 40c0-22.1-17.9-40-40-40z" />
    </Icon>
);

export default HandMiddleFinger;