
import { Icon } from "../../index";

/**
 * A component that renders the `flux-capacitor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=sharp-solid flux-capacitor}
 * @preview ![flux-capacitor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/flux-capacitor.svg)
 */
const FluxCapacitor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM148.7 237.3l-49-49L71.4 160 128 103.4l28.3 28.3 49 49c1.8-6.6 2.7-13.6 2.7-20.7c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80c7.2 0 14.1-.9 20.7-2.7zM184 282.7c-23.9 13.8-40 39.7-40 69.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-29.6-16.1-55.5-40-69.3l0 69.3 0 40-80 0 0-40 0-69.3zm115.3-45.4c6.6 1.8 13.6 2.7 20.7 2.7c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80c0 7.2 .9 14.1 2.7 20.7l49-49L320 103.4 376.6 160l-28.3 28.3-49 49zm-160-88.6L128 137.4 105.4 160l11.3 11.3L208 262.6l0 89.4 0 16 32 0 0-16 0-89.4 91.3-91.3L342.6 160 320 137.4l-11.3 11.3L224 233.4l-84.7-84.7z" />
    </Icon>
);

export default FluxCapacitor;