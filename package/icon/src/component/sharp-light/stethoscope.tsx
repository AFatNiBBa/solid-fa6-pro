
import { Icon } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=sharp-light stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M132.6 33.4l-15 5.6L64 59.1 64 192c0 70.7 57.3 128 128 128s128-57.3 128-128l0-132.9L266.4 39l-15-5.6 11.2-30 15 5.6 64 24L352 36.9 352 48l0 144c0 83-63.1 151.2-144 159.2l0 .8c0 70.7 57.3 128 128 128s128-57.3 128-128l0-98c-27.6-7.1-48-32.2-48-62c0-35.3 28.7-64 64-64s64 28.7 64 64c0 29.8-20.4 54.9-48 62l0 98c0 88.4-71.6 160-160 160s-160-71.6-160-160l0-.8C95.1 343.2 32 275 32 192L32 48l0-11.1L42.4 33l64-24 15-5.6 11.2 30zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Stethoscope;