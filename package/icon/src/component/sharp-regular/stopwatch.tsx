
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-regular stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0L304 0l0 48-56 0 0 49.4c43.4 5 82.8 23.3 113.8 50.9L391 119l17-17L441.9 136l-17 17-31 31c24 33.9 38.1 75.3 38.1 120c0 114.9-93.1 208-208 208S16 418.9 16 304C16 197.2 96.4 109.3 200 97.4L200 48l-56 0 0-48zm80 464a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm24-248l0 104 0 24-48 0 0-24 0-104 0-24 48 0 0 24z" />
    </Icon>
);

export default Stopwatch;