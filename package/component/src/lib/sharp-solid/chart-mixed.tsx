
import { Icon } from "../../index";

/**
 * A component that renders the `chart-mixed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-mixed?s=sharp-solid chart-mixed}
 * @preview ![chart-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-mixed.svg)
 */
const ChartMixed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M340 217L500 89 460 39 319.4 151.5 211.2 70.4 191.4 55.5 172 71 12 199l40 50L192.6 136.5l108.2 81.1 19.8 14.9L340 217zm-180 7l0 256 64 0 0-256-64 0zM32 320l0 160 64 0 0-160-64 0zm320-32l-64 0 0 192 64 0 0-192zm64-64l0 256 64 0 0-256-64 0z" />
    </Icon>
);

export default ChartMixed;