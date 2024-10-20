
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-list` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-list?s=sharp-regular temperature-list}
 * @preview ![temperature-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/temperature-list.svg)
 */
const TemperatureList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 294.5L69.3 307.7C56 324.2 48 345.1 48 368c0 53 43 96 96 96s96-43 96-96c0-22.9-8-43.8-21.3-60.3L208 294.5l0-17L208 48 80 48l0 229.5 0 17zM208 0l48 0 0 48 0 229.5c20 24.7 32 56.2 32 90.5c0 79.5-64.5 144-144 144S0 447.6 0 368c0-34.3 12-65.8 32-90.5L32 48 32 0 80 0 208 0zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L128 176l0-16 32 0 0 16 0 146.8c18.6 6.6 32 24.4 32 45.3zM320 32l24 0 144 0 24 0 0 48-24 0L344 80l-24 0 0-48zm0 128l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48zm32 128l24 0 112 0 24 0 0 48-24 0-112 0-24 0 0-48z" />
    </Icon>
);

export default TemperatureList;