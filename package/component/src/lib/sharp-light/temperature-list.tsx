
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-list` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-list?s=sharp-light temperature-list}
 * @preview ![temperature-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/temperature-list.svg)
 */
const TemperatureList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M69.3 284.5L80 275l0-14.3L80 32l128 0 0 228.7 0 14.3 10.7 9.5c23 20.6 37.3 50.3 37.3 83.5c0 61.9-50.1 112-112 112S32 429.9 32 368c0-33.2 14.4-62.9 37.3-83.5zM240 0L208 0 80 0 48 0l0 32 0 228.7C18.5 287.1 0 325.4 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-42.6-18.5-81-48-107.3L240 32l0-32zM112 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-29.8-20.4-54.9-48-62l0-162 0-16-32 0 0 16 0 162c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64zM320 32l0 32 16 0 160 0 16 0 0-32-16 0L336 32l-16 0zm0 128l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0zm32 128l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0z" />
    </Icon>
);

export default TemperatureList;