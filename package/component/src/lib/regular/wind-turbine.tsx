
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=regular wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M315.7 414.8c9.1 14.8 32 6.5 29.5-10.7L316.9 212c-.5-3.4 .1-6.9 1.8-9.9L411 31.2c8.3-15.3-10.4-31-24-20.1L234.7 131.7c-2.7 2.1-6 3.4-9.5 3.5L31.1 140.6C13.7 141 9.5 165 25.7 171.4l180.6 71.5c3.2 1.3 5.9 3.5 7.7 6.5L315.7 414.8zM232 339.8L232 464l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0 0-46.2-48-78zM256 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default WindTurbine;