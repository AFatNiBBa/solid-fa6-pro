
import { Icon } from "../../index";

/**
 * A component that renders the `stocking` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=sharp-regular stocking}
 * @preview ![stocking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/stocking.svg)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0l0 96L64 96 64 0 384 0zM144 281.7l-21.4 14.2L82.3 322.8C60.9 337.1 48 361.2 48 386.9l0 2.2c0 41.3 33.5 74.8 74.8 74.8c14.8 0 29.2-4.4 41.5-12.6L304 358.3 304 128l48 0 0 256L190.9 491.4c-20.2 13.4-43.9 20.6-68.1 20.6C55 512 0 457 0 389.2l0-2.2c0-41.8 20.9-80.9 55.7-104.1L96 256l0-128 48 0 0 128 0 25.7z" />
    </Icon>
);

export default Stocking;