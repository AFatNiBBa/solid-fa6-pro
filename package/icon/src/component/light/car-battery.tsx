
import { Icon } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=light car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16zm256 0c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zM64 160c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32L64 160zM0 192c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 192zm368 16c8.8 0 16 7.2 16 16l0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-32c0-8.8 7.2-16 16-16zM96 256l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default CarBattery;