
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-solid stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0L144 0l0 64 48 0 0 34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1L445.3 144 400 98.7l-22.6 22.6L355.7 143c-28.1-23-62.2-38.8-99.7-44.6L256 64l48 0 0-64L224 0zm24 216l0 112 0 24-48 0 0-24 0-112 0-24 48 0 0 24z" />
    </Icon>
);

export default Stopwatch;