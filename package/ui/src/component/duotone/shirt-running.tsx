
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shirt-running` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt-running?s=duotone shirt-running}
 * @preview ![shirt-running](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shirt-running.svg)
 */
const ShirtRunning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 282.5L0 393.8 342.5 149.2c-4-23.6-6.5-51.8-6.5-85.2l0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-48C112 14.3 97.7 0 80 0S48 14.3 48 32l0 32c0 91-19.2 143.6-33.3 170.1C6.7 249.1 0 265.5 0 282.5zM3.8 469.8C12.7 494.4 36.3 512 64 512l256 0c35.3 0 64-28.7 64-64l0-165.5c0-17-6.7-33.5-14.7-48.4c-2.8-5.3-5.8-11.6-8.9-19C241.6 299.9 122.7 384.8 3.8 469.8z" />
        <path d="M342.5 149.2L0 393.8 0 448c0 7.6 1.3 15 3.8 21.8L360.4 215c-6.6-16.2-13.2-37.9-17.9-65.9z" />
    </Icon>
);

export default ShirtRunning;