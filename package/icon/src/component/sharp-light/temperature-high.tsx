
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-high` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-high?s=sharp-light temperature-high}
 * @preview ![temperature-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/temperature-high.svg)
 */
const TemperatureHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96A64 64 0 1 0 416 0a64 64 0 1 0 0 128zM101.3 284.5L112 275l0-14.3L112 32l128 0 0 228.7 0 14.3 10.7 9.5c23 20.6 37.3 50.3 37.3 83.5c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-33.2 14.4-62.9 37.3-83.5zM272 0L240 0 112 0 80 0l0 32 0 228.7C50.5 287.1 32 325.4 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-42.6-18.5-81-48-107.3L272 32l0-32zM144 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-29.8-20.4-54.9-48-62l0-210 0-16-32 0 0 16 0 210c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default TemperatureHigh;