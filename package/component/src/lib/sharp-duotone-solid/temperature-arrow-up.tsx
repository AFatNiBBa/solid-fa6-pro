
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-arrow-up?s=sharp-duotone-solid temperature-arrow-up}
 * @preview ![temperature-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/temperature-arrow-up.svg)
 */
const TemperatureArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34.3-12-65.8-32-90.5L288 64l0-64L224 0 128 0 64 0l0 64 0 213.5C44 302.2 32 333.7 32 368zm64 0c0-19.1 6.6-36.5 17.8-50.3L128 300.2l0-22.7L128 64l96 0 0 213.5 0 22.7 14.2 17.6C249.4 331.5 256 348.9 256 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
        <path d="M480 160l64 0 0-32L448 32l-96 96 0 32 64 0 0 288 0 32 64 0 0-32 0-288zM224 368c0-20.9-13.4-38.7-32-45.3L192 112l0-16-32 0 0 16 0 210.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48z" />
    </Icon>
);

export default TemperatureArrowUp;