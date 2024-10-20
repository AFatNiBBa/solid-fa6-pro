
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-empty?s=sharp-thin temperature-empty}
 * @preview ![temperature-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/temperature-empty.svg)
 */
const TemperatureEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M88.9 261.6l7.1-4.8 0-8.5L96 16l128 0 0 232.2 0 8.5 7.1 4.8c34.3 23 56.9 62.1 56.9 106.5c0 70.7-57.3 128-128 128S32 438.7 32 368c0-44.4 22.6-83.5 56.9-106.5zM240 0L224 0 96 0 80 0l0 16 0 232.2C41.4 274.1 16 318.1 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-49.9-25.4-93.9-64-119.8L240 16l0-16zM112 368a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 96 368a64 64 0 1 0 128 0z" />
    </Icon>
);

export default TemperatureEmpty;