
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-empty?s=sharp-regular temperature-empty}
 * @preview ![temperature-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/temperature-empty.svg)
 */
const TemperatureEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M85.3 307.7L96 294.5l0-17L96 48l128 0 0 229.5 0 17 10.7 13.2C248 324.2 256 345.1 256 368c0 53-43 96-96 96s-96-43-96-96c0-22.9 8-43.8 21.3-60.3zM272 0L224 0 96 0 48 0l0 48 0 229.5C28 302.2 16 333.7 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34.3-12-65.8-32-90.5L272 48l0-48zM160 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default TemperatureEmpty;