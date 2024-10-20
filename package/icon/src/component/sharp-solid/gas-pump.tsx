
import { Icon } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=sharp-solid gas-pump}
 * @preview ![gas-pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gas-pump.svg)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L320 0l0 256 8 0c48.6 0 88 39.4 88 88l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-154c-27.6-7.1-48-32.2-48-62l0-64L368 48l32-32L512 128l0 64 0 32 0 152c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-32c0-22.1-17.9-40-40-40l-8 0 0 112L32 416 32 0zM96 64l0 128 160 0 0-128L96 64zM352 448l0 64L0 512l0-64 352 0z" />
    </Icon>
);

export default GasPump;