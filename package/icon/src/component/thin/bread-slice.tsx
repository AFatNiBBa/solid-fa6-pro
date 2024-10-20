
import { Icon } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=thin bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 240c-26.5 0-48-21.5-48-48c0-54.2 40.2-90.1 94.3-113.3C163.9 55.7 225.7 48 256 48s92.1 7.7 145.7 30.7C455.8 101.9 496 137.8 496 192c0 26.5-21.5 48-48 48c-8.8 0-16 7.2-16 16l0 176c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-176c0-8.8-7.2-16-16-16zm384 32l0-16c35.3 0 64-28.7 64-64C512 64 320 32 256 32S0 64 0 192c0 35.3 28.7 64 64 64l0 16 0 160c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-160z" />
    </Icon>
);

export default BreadSlice;