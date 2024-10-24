
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-low` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-low?s=sharp-solid temperature-low}
 * @preview ![temperature-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/temperature-low.svg)
 */
const TemperatureLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM96 300.2L81.8 317.8C70.6 331.5 64 348.9 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-19.1-6.6-36.5-17.8-50.3L192 300.2l0-22.7L192 64 96 64l0 213.5 0 22.7zM192 0l64 0 0 64 0 213.5c20 24.7 32 56.2 32 90.5c0 79.5-64.5 144-144 144S0 447.6 0 368c0-34.3 12-65.8 32-90.5L32 64 32 0 96 0l96 0zm0 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-50.7c0-8.8 7.2-16 16-16s16 7.2 16 16l0 50.7c18.6 6.6 32 24.4 32 45.3c0 0 0 0 0 0z" />
    </Icon>
);

export default TemperatureLow;