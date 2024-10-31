
import { Icon } from "../../index";

/**
 * A component that renders the `marker` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=sharp-regular marker}
 * @preview ![marker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/marker.svg)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path d="M10.2 461L0 512l51-10.2L160 480 485.5 154.5c17-17 26.5-40 26.5-64C512 40.5 471.5 0 421.5 0c-24 0-47 9.5-64 26.5L313 71 265 23l-17-17L231 23l-96 96-17 17L152 169.9l17-17 79-79 31 31L32 352 10.2 461zm51-10.2l15-75.1L193 258.9 253.1 319 136.3 435.8l-75.1 15zM226.9 225L391.4 60.5c8-8 18.8-12.5 30.1-12.5C445 48 464 67 464 90.5c0 11.3-4.5 22.1-12.5 30.1L287 285.1 226.9 225z" />
    </Icon>
);

export default Marker;