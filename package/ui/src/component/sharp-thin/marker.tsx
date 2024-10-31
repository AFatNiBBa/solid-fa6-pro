
import { Icon } from "../../index";

/**
 * A component that renders the `marker` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=sharp-thin marker}
 * @preview ![marker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/marker.svg)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path d="M3.4 495L0 512l17-3.4L160 480 485.5 154.5c17-17 26.5-40 26.5-64C512 40.5 471.5 0 421.5 0c-24 0-47 9.5-64 26.5L301.7 82.3l-48-48L248 28.7l-5.7 5.7-96 96-5.7 5.7L152 147.3l5.7-5.7L248 51.3l42.3 42.3L32 352 3.4 495zm17-3.4L46.7 359.9 181.7 225 287 330.3 152.1 465.3 20.4 491.6zM193 213.7L368.8 37.8c14-14 32.9-21.8 52.7-21.8C462.6 16 496 49.4 496 90.5c0 19.8-7.8 38.7-21.8 52.7L298.3 319 193 213.7z" />
    </Icon>
);

export default Marker;