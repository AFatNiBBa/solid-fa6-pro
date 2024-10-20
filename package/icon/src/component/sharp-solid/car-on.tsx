
import { Icon } from "../../index";

/**
 * A component that renders the `car-on` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-on?s=sharp-solid car-on}
 * @preview ![car-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/car-on.svg)
 */
const CarOn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0 80 0 24-48 0 0-24 0-80 0-24 48 0 0 24zM138.9 160l21.1 0 192 0 21.1 0 8.3 19.4L428 288l36 0 0 96 0 64 0 64-80 0 0-64-256 0 0 64-80 0 0-64 0-64 0-96 36 0 46.5-108.6 8.3-19.4zm192 64l-149.8 0-27.4 64 204.7 0-27.4-64zM128 392a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm280-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM56 22.1L73 39l48 48 17 17L104 137.9 87 121 39 73l-17-17L56 22.1zM439 39l17-17L489.9 56 473 73l-48 48-17 17L374.1 104l17-17 48-48z" />
    </Icon>
);

export default CarOn;