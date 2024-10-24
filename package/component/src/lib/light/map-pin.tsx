
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=light map-pin}
 * @preview ![map-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/map-pin.svg)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM304 144c0 74.1-56 135.2-128 143.1L176 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208.9c-72-8-128-69-128-143.1C16 64.5 80.5 0 160 0s144 64.5 144 144zm-192 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default MapPin;