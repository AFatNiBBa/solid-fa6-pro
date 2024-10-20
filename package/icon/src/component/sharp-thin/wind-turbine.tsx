
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=sharp-thin wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M300.7 199.9l.5 4.6 16.9 158L229.4 230.6l-2.6-3.8-4.2-1.9L77.4 160.5l158.5-10.8 4.6-.3 3.7-2.7L372.6 53 302.7 195.7l-2 4.1zm99.7-167L415.4 2 387.7 22.2 234.8 133.7 46 146.6l-34.2 2.3 31.4 13.9 173 76.7 7.9 11.7L240 275l32 47.6 16 23.8 33.7 50.1L340.8 425l-3.6-34.1L317.1 202.8 400.3 32.8zM240 332.4l-16-23.8L224 496l-88 0-8 0 0 16 8 0 96 0 48 0 96 0 8 0 0-16-8 0-88 0 0-92.2L272 380l0 116-32 0 0-163.6zM256 216a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default WindTurbine;