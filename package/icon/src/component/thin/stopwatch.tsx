
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=thin stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 8c0-4.4 3.6-8 8-8L296 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0 0 80.2c55.4 2.1 105.3 25.9 141.4 63.1l36.9-36.9c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-37.6 37.6C414 207.2 432 253.5 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-112.2 88.8-203.6 200-207.8L216 16l-64 0c-4.4 0-8-3.6-8-8zm80 488a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm8-312l0 136c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-136c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default Stopwatch;