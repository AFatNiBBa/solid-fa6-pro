
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=regular forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 94c0-16.6 13.5-30 30-30c6.3 0 12.5 2 17.6 5.7L502.1 236.6c6.2 4.5 9.9 11.7 9.9 19.4s-3.7 14.9-9.9 19.4L271.7 442.3c-5.1 3.7-11.3 5.7-17.6 5.7c-16.6 0-30-13.4-30-30l0-99.1L47.3 442.6c-5.1 3.5-11.1 5.4-17.3 5.4C13.5 448 0 434.5 0 417.9L0 94.1C0 77.5 13.5 64 30.1 64c6.2 0 12.2 1.9 17.3 5.4L224 193.1 224 94zm0 157.7L48 128.5l0 255L224 260.3l0-8.6zM447.1 256L272 129.2l0 253.6L447.1 256z" />
    </Icon>
);

export default Forward;