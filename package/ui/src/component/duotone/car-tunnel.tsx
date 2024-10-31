
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-tunnel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-tunnel?s=duotone car-tunnel}
 * @preview ![car-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-tunnel.svg)
 */
const CarTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 448c0 35.3 28.7 64 64 64l42.8 0c-6.6-5.9-10.8-14.4-10.8-24l0-112c0-20.8 11.3-38.9 28.1-48.6l21-64.7c7.5-23.1 29-38.7 53.3-38.7l115.2 0c24.3 0 45.8 15.6 53.3 38.7l21 64.7c16.8 9.7 28.2 27.8 28.2 48.6l0 112c0 9.6-4.2 18.1-10.8 24l42.8 0c35.3 0 64-28.7 64-64l0-192C512 114.6 397.4 0 256 0S0 114.6 0 256zM149.2 512l213.7 0c-6.6-5.9-10.8-14.4-10.8-24l0-40-192 0 0 40c0 9.6-4.2 18.1-10.8 24z" />
        <path d="M198.4 272l115.2 0c3.5 0 6.5 2.2 7.6 5.5L335 320l-158 0 13.8-42.5c1.1-3.3 4.1-5.5 7.6-5.5zm-53.3-9.3l-21 64.7C107.3 337.1 96 355.2 96 376l0 112c0 9.6 4.2 18.1 10.8 24l42.3 0c6.6-5.9 10.8-14.4 10.8-24l0-40 192 0 0 40c0 9.6 4.2 18.1 10.8 24l42.3 0c6.6-5.9 10.8-14.4 10.8-24l0-112c0-20.8-11.3-38.9-28.2-48.6l-21-64.7c-7.5-23.1-29-38.7-53.3-38.7l-115.2 0c-24.3 0-45.8 15.6-53.3 38.7zM144 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarTunnel;