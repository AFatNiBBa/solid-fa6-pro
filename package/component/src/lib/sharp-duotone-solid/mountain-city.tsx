
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain-city` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-city?s=sharp-duotone-solid mountain-city}
 * @preview ![mountain-city](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mountain-city.svg)
 */
const MountainCity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 0l0 144.4L357.7 256l58.3 0 0 64-18.3 0L507.1 495l10.6 17L640 512l0-320-72 0 0-72 0-24-48 0 0 24 0 72-40 0L480 0 288 0zm64 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm160 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M450 464l30 48-56.6 0L56.6 512 0 512l30-48L211.7 173.3 240 128l28.3 45.3L450 464zM303.4 320L240 218.6 161.8 343.7 192 384l48-64 63.4 0z" />
    </Icon>
);

export default MountainCity;