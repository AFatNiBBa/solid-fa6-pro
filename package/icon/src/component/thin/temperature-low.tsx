
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-low` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-low?s=thin temperature-low}
 * @preview ![temperature-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/temperature-low.svg)
 */
const TemperatureLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112A64 64 0 1 0 416 0a64 64 0 1 0 0 128zM112 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 163.7c0 8.4 4.4 15.7 10.7 20.3C283 287.3 304 325.2 304 368c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-42.8 21-80.7 53.3-104c6.3-4.6 10.7-11.9 10.7-20.3L112 80zM176 0C131.8 0 96 35.8 96 80l0 163.7c0 2.7-1.4 5.4-4 7.3c-36.3 26.1-60 68.8-60 117c0 79.5 64.5 144 144 144s144-64.5 144-144c0-48.2-23.7-90.8-60-117c-2.6-1.9-4-4.6-4-7.3L256 80c0-44.2-35.8-80-80-80zM128 368a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0c0-32.6-24.4-59.6-56-63.5l0-40.5c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 40.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default TemperatureLow;