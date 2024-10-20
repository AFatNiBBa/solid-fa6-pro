
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-arrow-down?s=duotone temperature-arrow-down}
 * @preview ![temperature-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/temperature-arrow-down.svg)
 */
const TemperatureArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L288 112C288 50.2 237.9 0 176 0S64 50.2 64 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368zm64 0c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5L128 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C249.8 332.6 256 349.5 256 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
        <path d="M480 352l32 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l32 0 0-288c0-17.7 14.3-32 32-32s32 14.3 32 32l0 288zM224 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-50.7c0-8.8 7.2-16 16-16s16 7.2 16 16l0 50.7c18.6 6.6 32 24.4 32 45.3z" />
    </Icon>
);

export default TemperatureArrowDown;