
import { Icon } from "../../index";

/**
 * A component that renders the `tty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tty?s=sharp-regular tty}
 * @preview ![tty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tty.svg)
 */
const Tty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 253.2l0-64.4c-40.9-17.2-87.1-17.2-128 0l0 64.4L32 288 0 152.6C30.8 112.4 118.7 32 256 32s225.2 80.4 256 120.6L480 288 320 253.2zM144 188.8l0-31.9 29.5-12.3c52.8-22.1 112.3-22.1 165.1 0L368 156.8l0 31.9 0 25.8 76.1 16.6 15.5-65.6C425.9 130.4 356.4 80 256 80S86.1 130.4 52.3 165.4l15.5 65.6L144 214.5l0-25.8zM32 320l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zm-352 0l256 0 0 64-256 0 0-64z" />
    </Icon>
);

export default Tty;