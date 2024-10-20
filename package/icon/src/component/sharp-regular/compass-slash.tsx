
import { Icon } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=sharp-regular compass-slash}
 * @preview ![compass-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/compass-slash.svg)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M536 393.4l84.9 65.9 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7 85 66C180.1 31.1 246.4 0 320 0C461.4 0 576 114.6 576 256c0 50.6-14.7 97.7-40 137.4zm-38.1-29.6C517 332.4 528 295.5 528 256c0-114.9-93.1-208-208-208c-58.2 0-110.8 23.9-148.5 62.4l98.9 76.8L448 128 395.8 284.5l102.1 79.3zM320 464c39.7 0 76.8-11.1 108.4-30.5l39.7 31.3C426.3 494.5 375.2 512 320 512C178.6 512 64 397.4 64 256c0-33.6 6.5-65.8 18.3-95.2L122 192.1c-6.5 20.1-10 41.6-10 63.9c0 114.9 93.1 208 208 208zm-6.1-120.6L192 384l36.1-108.3 85.8 67.6z" />
    </Icon>
);

export default CompassSlash;