
import { Icon } from "../../index";

/**
 * A component that renders the `truck-fire` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fire?s=light truck-fire}
 * @preview ![truck-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/truck-fire.svg)
 */
const TruckFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l48 0 0 64L48 96C21.5 96 0 117.5 0 144L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l16 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-48 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-96 0 0-64 240 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 0zM352 32l0 64-64 0 0-64 64 0zm0 96l32 0 0 128L32 256l0-112c0-8.8 7.2-16 16-16l16 0 32 0 256 0zm64 0l64 0 64 0 48 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-21.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64l-138.9 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L48 384c-8.8 0-16-7.2-16-16l0-80 360 0c13.3 0 24-10.7 24-24l0-136zM256 32l0 64-64 0 0-64 64 0zm-96 0l0 64L96 96l0-64 64 0zM480 192l64 0 0 64-64 0 0-64zm-8-32c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-80 0zM160 352a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm256 64a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default TruckFire;