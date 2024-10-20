
import { Icon } from "../../index";

/**
 * A component that renders the `speakers` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=light speakers}
 * @preview ![speakers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/speakers.svg)
 */
const Speakers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 256.8l0 63.6C248.5 284 215.3 256 176 256c-44.2 0-80 35.8-80 80s35.8 80 80 80c39.3 0 72.5-28 80-64.4l0 63.6c-20.7 20.3-49.1 32.8-80 32.8c-61.9 0-112-50.1-112-112s50.1-112 112-112c30.9 0 59.3 12.5 80 32.8zM261.5 480c4.2 11.9 10.7 22.8 19 32L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L280.4 0c-8.3 9.2-14.8 20.1-19 32L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l197.5 0zM176 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM152 336a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM352 32c-17.7 0-32 14.3-32 32l0 384c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L352 32zM288 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-384zm176 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM440 336a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Speakers;