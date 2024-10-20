
import { Icon } from "../../index";

/**
 * A component that renders the `truck-fire` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fire?s=sharp-light truck-fire}
 * @preview ![truck-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/truck-fire.svg)
 */
const TruckFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 0L0 0 0 32l64 0 0 64L32 96 0 96l0 32L0 384l0 32 32 0 32 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0 32 0 0-32 0-256 0-32-32 0-64 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-96 0 0-64 256 0 0-32zM352 32l0 64-64 0 0-64 64 0zm0 96l32 0 0 128L32 256l0-128 32 0 32 0 256 0zm64 0l64 0 64 0 64 0 0 256-37.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64l-138.9 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L32 384l0-96 368 0 16 0 0-16 0-144zM256 32l0 64-64 0 0-64 64 0zm-96 0l0 64L96 96l0-64 64 0zM480 192l64 0 0 64-64 0 0-64zm0-32l-32 0 0 32 0 64 0 32 32 0 64 0 32 0 0-32 0-64 0-32-32 0-64 0zM160 352a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm256 64a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default TruckFire;