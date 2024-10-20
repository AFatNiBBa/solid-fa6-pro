
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-empty?s=light temperature-empty}
 * @preview ![temperature-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/temperature-empty.svg)
 */
const TemperatureEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 156.7c0 14.9 7 27.7 16 36.9c19.8 20.2 32 47.9 32 78.4c0 61.9-50.1 112-112 112S48 429.9 48 368c0-30.5 12.2-58.2 32-78.4c9-9.2 16-22 16-36.9L96 96zM160 0C107 0 64 43 64 96l0 156.7c0 4.6-2.2 9.8-6.8 14.5C31.7 293.1 16 328.8 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-39.3-15.7-74.9-41.2-100.8c-4.6-4.7-6.8-9.9-6.8-14.5L256 96c0-53-43-96-96-96zM128 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 96 368a64 64 0 1 0 128 0z" />
    </Icon>
);

export default TemperatureEmpty;