
import { Icon } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=sharp-thin stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M130.1 16.3l-7.6 2.5L64 37.8 64 192c0 70.7 57.3 128 128 128s128-57.3 128-128l0-154.2-58.5-19-7.6-2.5 4.9-15.2 7.6 2.5 64 20.8 5.5 1.8 0 5.8 0 160c0 76.8-60.2 139.6-136 143.8l0 .2 0 24c0 75.1 60.9 136 136 136s136-60.9 136-136l0-104.5c-31.6-3.9-56-30.9-56-63.5c0-35.3 28.7-64 64-64s64 28.7 64 64c0 32.6-24.4 59.6-56 63.5L488 360c0 83.9-68.1 152-152 152s-152-68.1-152-152l0-24 0-.2C108.2 331.6 48 268.8 48 192L48 32l0-5.8 5.5-1.8 64-20.8 7.6-2.5 4.9 15.2zM480 144a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default Stethoscope;