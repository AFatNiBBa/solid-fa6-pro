
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-list` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-list?s=sharp-solid temperature-list}
 * @preview ![temperature-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/temperature-list.svg)
 */
const TemperatureList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M81.8 317.8L96 300.2l0-22.7L96 64l96 0 0 213.5 0 22.7 14.2 17.6C217.4 331.5 224 348.9 224 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-19.1 6.6-36.5 17.8-50.3zM256 0L192 0 96 0 32 0l0 64 0 213.5C12 302.2 0 333.7 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34.3-12-65.8-32-90.5L256 64l0-64zM144 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 176l0-16-32 0 0 16 0 146.8c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zM352 32l-32 0 0 64 32 0 128 0 32 0 0-64-32 0L352 32zM320 160l0 64 32 0 128 0 32 0 0-64-32 0-128 0-32 0zm64 128l-32 0 0 64 32 0 96 0 32 0 0-64-32 0-96 0z" />
    </Icon>
);

export default TemperatureList;