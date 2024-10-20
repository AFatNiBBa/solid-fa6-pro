
import { Icon } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=sharp-light gas-pump}
 * @preview ![gas-pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gas-pump.svg)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0 160L64 192 64 32l224 0zm0 192l0 256L64 480l0-256 224 0zM32 32l0 448L0 480l0 32 32 0 32 0 224 0 32 0 32 0 0-32-32 0 0-192 16 0c26.5 0 48 21.5 48 48l0 48c0 35.3 28.7 64 64 64s64-28.7 64-64l0-248 0-7-5.2-4.8-96-88L399 25.4 377.4 49l11.8 10.8L416 84.4l0 75.6c0 35.3 28.7 64 64 64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-44.2-35.8-80-80-80l-16 0 0-224 0-32L288 0 64 0 32 0l0 32zM480 192c-17.7 0-32-14.3-32-32l0-46.3L480 143l0 49z" />
    </Icon>
);

export default GasPump;