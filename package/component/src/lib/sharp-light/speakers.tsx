
import { Icon } from "../../index";

/**
 * A component that renders the `speakers` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=sharp-light speakers}
 * @preview ![speakers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/speakers.svg)
 */
const Speakers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 0l0 32L32 32l0 448 224 0 0 32L32 512 0 512l0-32L0 32 0 0 32 0 256 0zm0 256.8l0 63.6C248.5 284 215.3 256 176 256c-44.2 0-80 35.8-80 80s35.8 80 80 80c39.3 0 72.5-28 80-64.4l0 63.6c-20.7 20.3-49.1 32.8-80 32.8c-61.9 0-112-50.1-112-112s50.1-112 112-112c30.9 0 59.3 12.5 80 32.8zM176 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM152 336a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 32l0 448 288 0 0-448L320 32zM288 0l32 0L608 0l32 0 0 32 0 448 0 32-32 0-288 0-32 0 0-32 0-448 0-32zM464 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM440 336a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Speakers;