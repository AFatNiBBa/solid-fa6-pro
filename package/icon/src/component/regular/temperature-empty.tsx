
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-empty?s=regular temperature-empty}
 * @preview ![temperature-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/temperature-empty.svg)
 */
const TemperatureEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 161.9c0 14.5 5.7 27.1 12.8 36.6c12 16 19.2 35.9 19.2 57.5c0 53-43 96-96 96s-96-43-96-96c0-21.6 7.1-41.5 19.2-57.5C90.3 301 96 288.4 96 273.9L96 112zM160 0C98.1 0 48 50.2 48 112l0 161.9c0 1.7-.7 4.4-3.2 7.8C26.7 305.7 16 335.7 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-32.4-10.7-62.3-28.8-86.4c-2.5-3.4-3.2-6.1-3.2-7.8L272 112C272 50.2 221.9 0 160 0zm0 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default TemperatureEmpty;