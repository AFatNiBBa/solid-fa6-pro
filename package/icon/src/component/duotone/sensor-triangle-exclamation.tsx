
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor-triangle-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-triangle-exclamation?s=duotone sensor-triangle-exclamation}
 * @preview ![sensor-triangle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sensor-triangle-exclamation.svg)
 */
const SensorTriangleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 32c-26.4 0-50.7 14.2-63.7 37.1L233.9 430c-6.5 11.5-9.9 24.5-9.9 37.7c0 4.2 .3 8.3 1 12.3L64 480c-35.3 0-64-28.7-64-64L0 96zm64 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24s-24 10.7-24 24zm96 0l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M412.2 180.9l-150.4 265c-3.8 6.7-5.8 14.2-5.8 21.9c0 24.5 19.8 44.3 44.3 44.3l295.4 0c24.5 0 44.3-19.8 44.3-44.3c0-7.7-2-15.2-5.8-21.9l-150.4-265C476.5 168 462.8 160 448 160s-28.5 8-35.8 20.9zM448 256c8.8 0 16 7.2 16 16l0 88c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-88c0-8.8 7.2-16 16-16zM424 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default SensorTriangleExclamation;