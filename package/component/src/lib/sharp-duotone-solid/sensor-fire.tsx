
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-fire?s=sharp-duotone-solid sensor-fire}
 * @preview ![sensor-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sensor-fire.svg)
 */
const SensorFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 90.1-17 10.6c-24.1 15-58.9 43-88.1 79.6c-29 36.4-55 84.6-55 139.5c0 49.2 18.5 94.2 49 128.2L0 480 0 32zM64 96l0 24 0 144 0 24 48 0 0-24 0-144 0-24L64 96zm80 0l0 24 0 144 0 24 48 0 0-24 0-144 0-24-48 0zm80 0l0 24 0 144 0 24 48 0 0-24 0-144 0-24-48 0z" />
        <path d="M448 160s32.6 26.4 65 64c17.2-19.5 31-32 31-32s96 86.4 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160s128-192 128-192zm33 287.8c18 0 34-5 49-15c30-21 38-63 20-96c-2-4-4-8-7-12l-36 42s-58-74-62-79c-30 37-45 58-45 82c0 49 36 78 81 78z" />
    </Icon>
);

export default SensorFire;