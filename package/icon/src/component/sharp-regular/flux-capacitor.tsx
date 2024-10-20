
import { Icon } from "../../index";

/**
 * A component that renders the `flux-capacitor` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=sharp-regular flux-capacitor}
 * @preview ![flux-capacitor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/flux-capacitor.svg)
 */
const FluxCapacitor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zM283.3 253.3c6.6 1.8 13.6 2.7 20.7 2.7c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80c7.2 0 14.1-.9 20.7-2.7l-49-49L87.4 176 144 119.4l28.3 28.3L224 199.4l51.7-51.7L304 119.4 360.6 176l-28.3 28.3-49 49zM180.4 268.9c-21.9 14.3-36.4 39-36.4 67.1c0 44.2 35.8 80 80 80s80-35.8 80-80c0-28.1-14.5-52.8-36.4-67.1l-3.6 3.6 0 63.4 0 40-80 0 0-40 0-63.4-3.6-3.6zM155.3 164.7L144 153.4 121.4 176l11.3 11.3L208 262.6l0 73.4 0 16 32 0 0-16 0-73.4 75.3-75.3L326.6 176 304 153.4l-11.3 11.3L224 233.4l-68.7-68.7z" />
    </Icon>
);

export default FluxCapacitor;