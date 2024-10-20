
import { Icon } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=thin stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M127.5 5.2c1.6 4.1-.5 8.7-4.7 10.3L79.6 31.7C70.2 35.2 64 44.2 64 54.2L64 192c0 70.7 57.3 128 128 128s128-57.3 128-128l0-137.8c0-10-6.2-19-15.6-22.5L261.2 15.5c-4.1-1.6-6.2-6.2-4.7-10.3s6.2-6.2 10.3-4.7L310 16.7c15.6 5.9 26 20.8 26 37.5L336 192c0 76.8-60.2 139.6-136 143.8l0 .2 0 24c0 75.1 60.9 136 136 136s136-60.9 136-136l0-104.5c-31.6-3.9-56-30.9-56-63.5c0-35.3 28.7-64 64-64s64 28.7 64 64c0 32.6-24.4 59.6-56 63.5L488 360c0 83.9-68.1 152-152 152s-152-68.1-152-152l0-24 0-.2C108.2 331.6 48 268.8 48 192L48 54.2c0-16.7 10.3-31.6 26-37.5L117.2 .5c4.1-1.6 8.7 .5 10.3 4.7zM480 144a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default Stethoscope;