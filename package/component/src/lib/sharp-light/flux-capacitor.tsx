
import { Icon } from "../../index";

/**
 * A component that renders the `flux-capacitor` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=sharp-light flux-capacitor}
 * @preview ![flux-capacitor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flux-capacitor.svg)
 */
const FluxCapacitor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zM292.7 255.2c3.7 .5 7.5 .8 11.3 .8c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80c3.8 0 7.6-.3 11.3-.8L86.1 185.9l67.9-67.9L224 188.1l70.1-70.1 67.9 67.9-69.3 69.3zM173.8 273.7C155.6 288.4 144 310.8 144 336c0 44.2 35.8 80 80 80s80-35.8 80-80c0-25.2-11.6-47.6-29.8-62.3l-2.2 2.2 0 92.1-48 0-48 0 0-92.1-2.2-2.2zm-41.1-86.4L208 262.6l0 73.4 32 0 0-73.4 75.3-75.3-22.6-22.6L224 233.4l-68.7-68.7-22.6 22.6z" />
    </Icon>
);

export default FluxCapacitor;