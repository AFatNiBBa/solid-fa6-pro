
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-sun` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-sun?s=sharp-light temperature-sun}
 * @preview ![temperature-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/temperature-sun.svg)
 */
const TemperatureSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M312 104L300.5 35 294.7 0 265.6 20.3 208 60.7 150.4 20.3 121.3 0l-5.8 35L104 104 35 115.5 0 121.3l20.3 29.1L60.7 208 20.3 265.6 0 294.7l35 5.8L104 312l11.5 69 5.8 35 29.1-20.3L208 355.3l57.6 40.3 9.4 6.6c-2-11.1-3-22.6-3-34.3c0-2.6 .1-5.2 .2-7.8l-.5-.5-.2 1.1-45.1-31.6L208 316.3l-18.4 12.8-45.1 31.6-9-53.9-3.8-22.5-22.5-3.8-53.9-9 31.6-45.1L99.7 208 86.9 189.7 55.3 144.6l53.9-9 22.5-3.8 3.8-22.5 9-53.9 45.1 31.6L208 99.7l18.4-12.8 45.1-31.6 9 53.9 3.8 22.5 22.5 3.8 29.3 4.9 0-32.4-24-4zM256 208a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM389.3 284.5L400 275l0-14.3L400 32l128 0 0 228.7 0 14.3 10.7 9.5c23 20.6 37.3 50.3 37.3 83.5c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-33.2 14.4-62.9 37.3-83.5zM560 0L528 0 400 0 368 0l0 32 0 228.7c-29.5 26.4-48 64.7-48 107.3c0 79.5 64.5 144 144 144s144-64.5 144-144c0-42.6-18.5-81-48-107.3L560 32l0-32zM432 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-29.8-20.4-54.9-48-62l0-210 0-16-32 0 0 16 0 210c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default TemperatureSun;