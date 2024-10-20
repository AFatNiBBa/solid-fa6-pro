
import { Icon } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=sharp-thin gas-pump}
 * @preview ![gas-pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gas-pump.svg)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 16L48 16l0 400 256 0 0-400zM48 496l256 0 0-64L48 432l0 64zm304 16l-32 0-16 0L48 512l-16 0L0 512l0-16 32 0L32 16 32 0 48 0 304 0l16 0 0 16 0 256 8 0c39.8 0 72 32.2 72 72l0 40c0 26.5 21.5 48 48 48s48-21.5 48-48l0-160-8 0c-30.9 0-56-25.1-56-56l0-95.1-29.4-27-5.9-5.4 10.8-11.8 5.9 5.4 96 88 2.6 2.4 0 3.5 0 256c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-40c0-30.9-25.1-56-56-56l-8 0 0 208 32 0 0 16zM496 131.5l-48-44 0 80.5c0 22.1 17.9 40 40 40l8 0 0-76.5zM112 80l0 128 128 0 0-128L112 80zM96 64l16 0 128 0 16 0 0 16 0 128 0 16-16 0-128 0-16 0 0-16L96 80l0-16z" />
    </Icon>
);

export default GasPump;