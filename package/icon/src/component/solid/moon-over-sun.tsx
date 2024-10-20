
import { Icon } from "../../index";

/**
 * A component that renders the `moon-over-sun` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=solid moon-over-sun}
 * @preview ![moon-over-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/moon-over-sun.svg)
 */
const MoonOverSun: typeof Icon = x => (
    <Icon {...x}>
        <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM400 256a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-258 0c0-63.1 51.6-114 115-114c3.3 0 6.5 .1 9.7 .4c7 .6 12.8 5.7 14.3 12.6s-1.7 13.9-7.8 17.4c-22.9 12.8-38.3 37.1-38.3 64.8c0 41 33.6 74.5 75.4 74.5c4.4 0 8.8-.4 13-1.1c6.9-1.2 13.8 2.3 17 8.6s1.9 13.9-3.2 18.7c-20.7 19.9-49 32.2-80.1 32.2c-63.4 0-115-50.9-115-114z" />
    </Icon>
);

export default MoonOverSun;