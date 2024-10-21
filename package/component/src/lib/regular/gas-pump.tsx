
import { Icon } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=regular gas-pump}
 * @preview ![gas-pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gas-pump.svg)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48c8.8 0 16 7.2 16 16l0 128L80 192 80 64c0-8.8 7.2-16 16-16l160 0zm16 192l0 224L80 464l0-224 192 0zM32 64l0 400-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 48 0 192 0 48 0 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-160 8 0c22.1 0 40 17.9 40 40l0 32c0 39.8 32.2 72 72 72s72-32.2 72-72l0-220.1c0-19.1-7.6-37.4-21.1-50.9L417 31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33 33 0 62.1c0 29.8 20.4 54.9 48 62l0 154c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-48.6-39.4-88-88-88l-8 0 0-192c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64z" />
    </Icon>
);

export default GasPump;