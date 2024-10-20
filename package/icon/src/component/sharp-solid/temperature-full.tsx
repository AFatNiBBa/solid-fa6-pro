
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-full` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-full?s=sharp-solid temperature-full}
 * @preview ![temperature-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/temperature-full.svg)
 */
const TemperatureFull: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M112 300.2L97.8 317.8C86.6 331.5 80 348.9 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-19.1-6.6-36.5-17.8-50.3L208 300.2l0-22.7L208 64l-96 0 0 213.5 0 22.7zM208 0l64 0 0 64 0 213.5c20 24.7 32 56.2 32 90.5c0 79.5-64.5 144-144 144S16 447.6 16 368c0-34.3 12-65.8 32-90.5L48 64 48 0l64 0 96 0zm0 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L144 112l0-16 32 0 0 16 0 210.8c18.6 6.6 32 24.4 32 45.3z" />
    </Icon>
);

export default TemperatureFull;