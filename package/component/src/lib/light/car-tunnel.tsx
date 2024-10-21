
import { Icon } from "../../index";

/**
 * A component that renders the `car-tunnel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-tunnel?s=light car-tunnel}
 * @preview ![car-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/car-tunnel.svg)
 */
const CarTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C132.3 32 32 132.3 32 256l0 240c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 256C0 114.6 114.6 0 256 0S512 114.6 512 256l0 240c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-240C480 132.3 379.7 32 256 32zM174.7 266.7l-19 54.3c4-.7 8.1-1 12.2-1l176 0c4.2 0 8.3 .4 12.2 1l-19-54.3C335 260.3 329 256 322.2 256l-132.3 0c-6.8 0-12.9 4.3-15.1 10.7zm-61.2 78.2l31-88.7c6.7-19.3 24.9-32.2 45.3-32.2l132.3 0c20.4 0 38.6 12.9 45.3 32.2l31 88.7C409.4 357.5 416 374 416 392l0 104c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16-256 0 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-104c0-18 6.6-34.5 17.5-47.1zM128 448l256 0 0-56c0-22.1-17.9-40-40-40l-176 0c-22.1 0-40 17.9-40 40l0 56zm32-48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm168-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarTunnel;