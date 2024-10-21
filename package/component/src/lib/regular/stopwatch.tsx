
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=regular stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 24c0-13.3 10.7-24 24-24L280 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 49.4c43.4 5 82.8 23.3 113.8 50.9L391 119c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-31 31c24 33.9 38.1 75.3 38.1 120c0 114.9-93.1 208-208 208S16 418.9 16 304C16 197.2 96.4 109.3 200 97.4L200 48l-32 0c-13.3 0-24-10.7-24-24zm80 440a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm24-248l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default Stopwatch;