
import { Icon } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=light stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M127 10.4c3.1 8.3-1.1 17.5-9.4 20.6L74.4 47.2C68.1 49.5 64 55.5 64 62.2L64 192c0 70.7 57.3 128 128 128s128-57.3 128-128l0-129.8c0-6.7-4.1-12.6-10.4-15L266.4 31c-8.3-3.1-12.5-12.3-9.4-20.6s12.3-12.5 20.6-9.4l43.2 16.2c18.7 7 31.1 24.9 31.1 44.9L352 192c0 83-63.1 151.2-144 159.2l0 .8c0 70.7 57.3 128 128 128s128-57.3 128-128l0-98c-27.6-7.1-48-32.2-48-62c0-35.3 28.7-64 64-64s64 28.7 64 64c0 29.8-20.4 54.9-48 62l0 98c0 88.4-71.6 160-160 160s-160-71.6-160-160l0-.8C95.1 343.2 32 275 32 192L32 62.2c0-20 12.4-37.9 31.1-44.9L106.4 1c8.3-3.1 17.5 1.1 20.6 9.4zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Stethoscope;