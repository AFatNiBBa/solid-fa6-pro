
import { Icon } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=sharp-thin volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM576 256c0-62.8-30.2-118.6-76.8-153.6l-9.6 12.8C532.4 147.3 560 198.4 560 256c0 29.5-7.3 57.4-20.1 81.8l12.8 10.1C567.5 320.6 576 289.3 576 256zM352 48l0-16-16 0-32 0L232.7 95.4l12.8 10.1L310.1 48 336 48l0 128.9 16 12.6L352 48zM48 176l54.5 0L82.2 160 48 160l-16 0 0 16 0 160 0 16 16 0 112 0L304 480l32 0 16 0 0-16 0-91-16-12.6L336 464l-25.9 0L170.6 340l-4.5-4-6.1 0L48 336l0-160zm416 80c0 6.9-.9 13.6-2.5 20L475 286.6c3.2-9.6 5-19.9 5-30.6c0-31.4-15.1-59.3-38.4-76.8L432 192c19.4 14.6 32 37.8 32 64z" />
    </Icon>
);

export default VolumeSlash;