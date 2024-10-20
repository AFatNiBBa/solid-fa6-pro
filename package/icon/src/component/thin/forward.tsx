
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=thin forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M254 80c3 0 5.8 .9 8.2 2.7L492.7 249.5c2.1 1.5 3.3 3.9 3.3 6.5s-1.2 5-3.3 6.5L262.3 429.3c-2.4 1.7-5.3 2.7-8.2 2.7c-7.8 0-14-6.3-14-14L240 94c0-7.8 6.3-14 14-14zm0-16c-16.6 0-30 13.5-30 30l0 103.4L47.7 69.7C42.5 66 36.4 64 30 64C13.5 64 0 77.5 0 94L0 418c0 16.6 13.5 30 30 30c6.3 0 12.5-2 17.6-5.7L224 314.6 224 418c0 16.6 13.5 30 30 30c6.3 0 12.5-2 17.6-5.7L502.1 275.4c6.2-4.5 9.9-11.7 9.9-19.4s-3.7-14.9-9.9-19.4L271.7 69.7C266.5 66 260.4 64 254 64zM224 294.8L38.3 429.3C35.9 431.1 33 432 30 432c-7.8 0-14-6.3-14-14L16 94c0-7.8 6.3-14 14-14c3 0 5.8 .9 8.2 2.7L224 217.2l0 77.7z" />
    </Icon>
);

export default Forward;