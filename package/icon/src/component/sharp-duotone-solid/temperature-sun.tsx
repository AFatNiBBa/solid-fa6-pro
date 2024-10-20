
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-sun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-sun?s=sharp-duotone-solid temperature-sun}
 * @preview ![temperature-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/temperature-sun.svg)
 */
const TemperatureSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34.3-12-65.8-32-90.5L576 64l0-64L512 0 416 0 352 0l0 64 0 213.5c-20 24.7-32 56.2-32 90.5zm64 0c0-19.1 6.6-36.5 17.8-50.3L416 300.2l0-22.7L416 64l96 0 0 213.5 0 22.7 14.2 17.6C537.4 331.5 544 348.9 544 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
        <path d="M104 104L121.3 0 208 60.7 294.7 0 312 104l8 1.3 0 153.4c-20.2 28.6-32 63.5-32 101.2c0 17.7 2.6 34.9 7.5 51l-.8 5L208 355.3 121.3 416 104 312 0 294.7 60.7 208 0 121.3 104 104zm104 40a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM464 96c8.8 0 16 7.2 16 16l0 210.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L448 112c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default TemperatureSun;