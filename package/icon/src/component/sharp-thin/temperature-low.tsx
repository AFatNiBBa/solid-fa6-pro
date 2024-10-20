
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-low` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-low?s=sharp-thin temperature-low}
 * @preview ![temperature-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/temperature-low.svg)
 */
const TemperatureLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112A64 64 0 1 0 416 0a64 64 0 1 0 0 128zM104.9 261.6l7.1-4.8 0-8.5L112 16l128 0 0 232.2 0 8.5 7.1 4.8c34.3 23 56.9 62.1 56.9 106.5c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-44.4 22.6-83.5 56.9-106.5zM256 0L240 0 112 0 96 0l0 16 0 232.2C57.4 274.1 32 318.1 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-49.9-25.4-93.9-64-119.8L256 16l0-16zM128 368a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0c0-32.6-24.4-59.6-56-63.5l0-40.5c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 40.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default TemperatureLow;