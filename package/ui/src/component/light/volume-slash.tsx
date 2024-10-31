
import { Icon } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=light volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM576 256c0-59.6-27.2-112.9-69.8-148.1c-6.8-5.6-16.9-4.7-22.5 2.1s-4.7 16.9 2.1 22.5C521.4 161.9 544 206.3 544 256c0 28.7-7.5 55.6-20.8 78.9l25.4 20C566 326 576 292.2 576 256zM472 294.4c5.2-11.8 8-24.8 8-38.4c0-31.4-15.1-59.3-38.4-76.8c-7.1-5.3-17.1-3.9-22.4 3.2s-3.9 17.1 3.2 22.4C438 216.5 448 235.1 448 256c0 6.1-.9 12-2.4 17.6L472 294.4zM352 61.8C352 45.3 338.7 32 322.2 32c-7.3 0-14.3 2.7-19.8 7.5l-72.1 64.1 25.5 20.1L320 66.7l0 107.8 32 25.3 0-137.9zM88 192l47.6 0L95.1 160 88 160c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l78.9 0L302.4 472.5l10.6-12-10.6 12c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8l0-87.4-32-25.3 0 107.8L183.6 324c-2.9-2.6-6.7-4-10.6-4l-85 0c-13.3 0-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default VolumeSlash;