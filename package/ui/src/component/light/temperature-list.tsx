
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-list` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-list?s=light temperature-list}
 * @preview ![temperature-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/temperature-list.svg)
 */
const TemperatureList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 156.7c0 14.9 7 27.7 16 36.9c19.8 20.2 32 47.9 32 78.4c0 61.9-50.1 112-112 112S32 429.9 32 368c0-30.5 12.2-58.2 32-78.4c9-9.2 16-22 16-36.9L80 96zM144 0C91 0 48 43 48 96l0 156.7c0 4.6-2.2 9.8-6.8 14.5C15.7 293.1 0 328.8 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-39.3-15.7-74.9-41.2-100.8c-4.6-4.7-6.8-9.9-6.8-14.5L240 96c0-53-43-96-96-96zM112 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-29.8-20.4-54.9-48-62l0-162c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 162c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64zM320 48c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L336 32c-8.8 0-16 7.2-16 16zm0 128c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16zm32 128c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default TemperatureList;