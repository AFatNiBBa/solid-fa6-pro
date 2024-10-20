
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=sharp-light volume-off}
 * @preview ![volume-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/volume-off.svg)
 */
const VolumeOff: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M140.2 320l9.1 8.1L284.2 448l3.8 0 0-384-3.8 0L149.3 183.9l-9.1 8.1L128 192l-96 0 0 128 96 0 12.2 0zM32 352L0 352l0-32L0 192l0-32 32 0 96 0L272 32l16 0 32 0 0 32 0 384 0 32-32 0-16 0L128 352l-96 0z" />
    </Icon>
);

export default VolumeOff;