
import { Icon } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=sharp-light volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18zM576 256c0-62.8-30.2-118.6-76.8-153.6L480 128c38.9 29.2 64 75.7 64 128c0 28.7-7.6 55.6-20.8 78.9l25.4 20C566 326 576 292.2 576 256zM472 294.5c5.2-11.8 8-24.8 8-38.5c0-31.4-15.1-59.3-38.4-76.8l-19.2 25.6C437.9 216.5 448 235.1 448 256c0 6.1-.9 12-2.4 17.6L472 294.5zM352 64l0-32-32 0-16 0-77.4 68.8 25.5 20.1 64-56.9 3.8 0 0 110.5 32 25.3L352 64zM64 192l71.6 0L95.1 160 64 160l-32 0 0 32 0 128 0 32 32 0 96 0L304 480l16 0 32 0 0-32 0-85.2-32-25.3L320 448l-3.8 0L181.3 328.1l-9.1-8.1L160 320l-96 0 0-128z" />
    </Icon>
);

export default VolumeSlash;