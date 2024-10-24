
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=thin map-pin}
 * @preview ![map-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/map-pin.svg)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 272a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM304 144c0 76.8-60.2 139.6-136 143.8L168 504c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-216.2C76.2 283.6 16 220.8 16 144C16 64.5 80.5 0 160 0s144 64.5 144 144zM80 136c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-48.6 39.4-88 88-88c4.4 0 8 3.6 8 8s-3.6 8-8 8c-39.8 0-72 32.2-72 72z" />
    </Icon>
);

export default MapPin;