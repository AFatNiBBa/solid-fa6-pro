
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-snow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-snow?s=sharp-duotone-solid temperature-snow}
 * @preview ![temperature-snow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/temperature-snow.svg)
 */
const TemperatureSnow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34.3-12-65.8-32-90.5L544 64l0-64L480 0 384 0 320 0l0 64 0 213.5c-20 24.7-32 56.2-32 90.5zm64 0c0-19.1 6.6-36.5 17.8-50.3L384 300.2l0-22.7L384 64l96 0 0 213.5 0 22.7 14.2 17.6C505.4 331.5 512 348.9 512 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
        <path d="M288 96.9l-22.6-6.1-4.1 15.5-12.9 48.2L200 182.4l0-55.8 35.3-35.3L246.6 80 224 57.4 212.7 68.7 200 81.4 200 56l0-24-48 0 0 24 0 25.4L139.3 68.7 128 57.4 105.4 80l11.3 11.3L152 126.6l0 55.8-48.3-27.9L90.7 106.3 86.6 90.8 55.7 99.1l4.1 15.5 4.6 17.3-15-8.7-20.8-12-24 41.6 20.8 12 15 8.7-17.3 4.6L7.7 182.3 16 213.2 31.4 209l48.2-12.9L128 224 79.7 251.9 31.4 239 16 234.8 7.7 265.7l15.5 4.1 17.3 4.6-15 8.7-20.8 12 24 41.6 20.8-12 15-8.7-4.6 17.3-4.1 15.5 30.9 8.3 4.1-15.5 12.9-48.2L152 265.6l0 55.8-35.3 35.3L105.4 368 128 390.6l11.3-11.3L152 366.6l0 25.4 0 24 48 0 0-24 0-25.4 12.7 12.7L224 390.6 246.6 368l-11.3-11.3L200 321.4l0-55.8 48.3 27.9 10.9 40.7c4.8-24.7 14.8-47.6 28.8-67.4l0-19.1-15.7 4.2L224 224l48.3-27.9 15.7 4.2 0-68.7-.5 .3 .5-1.8 0-33.2zM448 256l-32 0 0 16 0 50.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-50.7 0-16z" />
    </Icon>
);

export default TemperatureSnow;