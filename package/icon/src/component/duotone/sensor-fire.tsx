
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor-fire` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-fire?s=duotone sensor-fire}
 * @preview ![sensor-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sensor-fire.svg)
 */
const SensorFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 32.2c-12.6-1.2-25.5 2.7-35.5 11.7c-35.4 31.6-65.6 67.7-87.3 102.8C304.3 276.5 288 314.9 288 350.1c0 49.3 18.6 95.2 49.6 129.9L64 480c-35.3 0-64-28.7-64-64L0 96zm64 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24s-24 10.7-24 24zm96 0l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M433.8 163.6c5.6-5 14.2-5 19.8 0c19.7 17.8 38.2 37 55.5 57.7c7.9-9.9 16.8-20.7 26.5-29.5c5.6-5.1 14.4-5.1 20 0c24.7 22.7 45.6 52.7 60.4 81.1c14.5 28 24.2 56.7 24.2 76.9c0 87.8-71.3 161.9-160 161.9c-89.7 0-160-74.2-160-161.9c0-26.4 12.7-58.6 32.4-90.6c20-32.4 48.1-66.1 81.4-95.8zM481 447.9c18 0 34-5 49-15c30-21 38-63 20-96c-2-4-4-8-7-12l-36 42s-58-74-62-79c-30 37-45 58-45 82c0 49 36 78 81 78z" />
    </Icon>
);

export default SensorFire;