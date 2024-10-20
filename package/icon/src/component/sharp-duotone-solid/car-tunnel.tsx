
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-tunnel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-tunnel?s=sharp-duotone-solid car-tunnel}
 * @preview ![car-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-tunnel.svg)
 */
const CarTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 512l96 0 0-64 0-128 28.4 0 30.2-80.4 5.8-15.6 16.6 0 159 0 16.8 0 5.7 15.8L387.7 320l28.3 0 0 128 0 64 96 0 0-256C512 114.6 397.4 0 256 0S0 114.6 0 256zM160 448l0 64 192 0 0-64-192 0zm15.6-128l161 0-17.5-48-125.6 0-18 48z" />
        <path d="M177 224l-16.6 0-5.8 15.6L124.4 320 96 320l0 128 0 64 64 0 0-64 192 0 0 64 64 0 0-64 0-128-28.3 0-29.2-80.2L352.8 224 336 224l-159 0zm159.6 96l-161 0 18-48 125.6 0 17.5 48zM144 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarTunnel;