
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-arrow-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-arrow-down?s=thin temperature-arrow-down}
 * @preview ![temperature-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/temperature-arrow-down.svg)
 */
const TemperatureArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 163.7c0 8.4 4.4 15.7 10.7 20.3C283 287.3 304 325.2 304 368c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-42.8 21-80.7 53.3-104c6.3-4.6 10.7-11.9 10.7-20.3L112 80zM176 0C131.8 0 96 35.8 96 80l0 163.7c0 2.7-1.4 5.4-4 7.3c-36.3 26.1-60 68.8-60 117c0 79.5 64.5 144 144 144s144-64.5 144-144c0-48.2-23.7-90.8-60-117c-2.6-1.9-4-4.6-4-7.3L256 80c0-44.2-35.8-80-80-80zM128 368a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0c0-32.6-24.4-59.6-56-63.5l0-40.5c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 40.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64zm130.3 29.6l80 80c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L464 452.7 464 40c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 412.7-66.3-66.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z" />
    </Icon>
);

export default TemperatureArrowDown;