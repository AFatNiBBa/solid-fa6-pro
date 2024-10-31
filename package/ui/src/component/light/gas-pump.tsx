
import { Icon } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=light gas-pump}
 * @preview ![gas-pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gas-pump.svg)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c17.7 0 32 14.3 32 32l0 128L64 192 64 64c0-17.7 14.3-32 32-32l160 0zm32 192l0 256L64 480l0-256 224 0zM32 64l0 416-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 32 0 224 0 32 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-192 16 0c26.5 0 48 21.5 48 48l0 48c0 35.3 28.7 64 64 64s64-28.7 64-64l0-226.9c0-17.9-7.5-35.1-20.8-47.2L410.8 36.2c-6.5-6-16.6-5.5-22.6 1s-5.5 16.6 1 22.6L416 84.4l0 75.6c0 35.3 28.7 64 64 64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-44.2-35.8-80-80-80l-16 0 0-192c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64zM480 192c-17.7 0-32-14.3-32-32l0-46.3 21.6 19.8c6.6 6.1 10.4 14.6 10.4 23.6l0 34.9z" />
    </Icon>
);

export default GasPump;