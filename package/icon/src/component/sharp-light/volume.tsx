
import { Icon } from "../../index";

/**
 * A component that renders the `volume` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume?s=sharp-light volume}
 * @preview ![volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/volume.svg)
 */
const Volume: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M181.3 328.1l-9.1-8.1L160 320l-96 0 0-128 96 0 12.2 0 9.1-8.1L316.2 64l3.8 0 0 384-3.8 0L181.3 328.1zM32 352l32 0 96 0L304 480l16 0 32 0 0-32 0-384 0-32-32 0-16 0L160 160l-96 0-32 0 0 32 0 128 0 32zm409.6-19.2C464.9 315.3 480 287.4 480 256s-15.1-59.3-38.4-76.8l-19.2 25.6C437.9 216.5 448 235.1 448 256s-10.1 39.5-25.6 51.2l19.2 25.6zm57.6 76.8c46.6-35 76.8-90.8 76.8-153.6s-30.2-118.6-76.8-153.6L480 128c38.9 29.2 64 75.7 64 128s-25.1 98.8-64 128l19.2 25.6z" />
    </Icon>
);

export default Volume;