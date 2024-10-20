
import { Icon } from "../../index";

/**
 * A component that renders the `volume-low` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-low?s=sharp-light volume-low}
 * @preview ![volume-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/volume-low.svg)
 */
const VolumeLow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M149.3 328.1l-9.1-8.1L128 320l-96 0 0-128 96 0 12.2 0 9.1-8.1L284.2 64l3.8 0 0 384-3.8 0L149.3 328.1zM0 352l32 0 96 0L272 480l16 0 32 0 0-32 0-384 0-32-32 0-16 0L128 160l-96 0L0 160l0 32L0 320l0 32zm409.6-19.2C432.9 315.3 448 287.4 448 256s-15.1-59.3-38.4-76.8l-19.2 25.6C405.9 216.5 416 235.1 416 256s-10.1 39.5-25.6 51.2l19.2 25.6z" />
    </Icon>
);

export default VolumeLow;