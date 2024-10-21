
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-list` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-list?s=regular temperature-list}
 * @preview ![temperature-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/temperature-list.svg)
 */
const TemperatureList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 161.9c0 14.5 5.7 27.1 12.8 36.6c12 16 19.2 35.9 19.2 57.5c0 53-43 96-96 96s-96-43-96-96c0-21.6 7.1-41.5 19.2-57.5C74.3 301 80 288.4 80 273.9L80 112zM144 0C82.1 0 32 50.2 32 112l0 161.9c0 1.7-.7 4.4-3.2 7.8C10.7 305.7 0 335.7 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-32.4-10.7-62.3-28.8-86.4c-2.5-3.4-3.2-6.1-3.2-7.8L256 112C256 50.2 205.9 0 144 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 146.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zM344 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L344 32zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm32 128c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
    </Icon>
);

export default TemperatureList;