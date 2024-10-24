
import { Icon } from "../../index";

/**
 * A component that renders the `caravan` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=sharp-light caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 64c70.7 0 128 57.3 128 128l0 192-64 0 0-224 0-32-32 0-96 0-32 0 0 32 0 224-37.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L32 384 32 64l384 0zM32 416l64 0c0 53 43 96 96 96s96-43 96-96l32 0 32 0 96 0 32 0 64 0 32 0 48 0 16 0 0-32-16 0-48 0 0-192c0-88.4-71.6-160-160-160L32 32 0 32 0 64 0 384l0 32 32 0zM448 224l-32 0-16 0 0 32 16 0 32 0 0 128-96 0 0-224 96 0 0 64zM128 160l128 0 0 64-128 0 0-64zM96 128l0 32 0 64 0 32 32 0 128 0 32 0 0-32 0-64 0-32-32 0-128 0-32 0zm96 224a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Caravan;