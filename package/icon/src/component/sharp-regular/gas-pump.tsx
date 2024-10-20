
import { Icon } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=sharp-regular gas-pump}
 * @preview ![gas-pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gas-pump.svg)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 48l0 144L80 192 80 48l192 0zm0 192l0 224L80 464l0-224 192 0zM32 48l0 416L0 464l0 48 32 0 48 0 192 0 48 0 32 0 0-48-32 0 0-160 8 0c22.1 0 40 17.9 40 40l0 32c0 39.8 32.2 72 72 72s72-32.2 72-72l0-240 0-9.9-7-7L417 31 383 65l33 33 0 62.1c0 29.8 20.4 54.9 48 62l0 154c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-48.6-39.4-88-88-88l-8 0 0-208 0-48L272 0 80 0 32 0l0 48z" />
    </Icon>
);

export default GasPump;