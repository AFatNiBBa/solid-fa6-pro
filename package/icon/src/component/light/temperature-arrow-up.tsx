
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-arrow-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-arrow-up?s=light temperature-arrow-up}
 * @preview ![temperature-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/temperature-arrow-up.svg)
 */
const TemperatureArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 156.7c0 14.9 7 27.7 16 36.9c19.8 20.2 32 47.9 32 78.4c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-30.5 12.2-58.2 32-78.4c9-9.2 16-22 16-36.9L112 96zM176 0C123 0 80 43 80 96l0 156.7c0 4.6-2.2 9.8-6.8 14.5C47.7 293.1 32 328.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-39.3-15.7-74.9-41.2-100.8c-4.6-4.7-6.8-9.9-6.8-14.5L272 96c0-53-43-96-96-96zM144 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-29.8-20.4-54.9-48-62l0-210c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 210c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64zM420.7 36.7l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L416 86.6 416 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-377.4 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0z" />
    </Icon>
);

export default TemperatureArrowUp;