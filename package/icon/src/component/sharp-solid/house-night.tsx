
import { Icon } from "../../index";

/**
 * A component that renders the `house-night` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-night?s=sharp-solid house-night}
 * @preview ![house-night](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-night.svg)
 */
const HouseNight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M88 88c0-38.1 24.2-70.5 58-82.7C135.3 1.8 123.8 0 112 0C50.1 0 0 50.1 0 112s50.1 112 112 112c40.6 0 76.1-21.6 95.8-53.9c-9.9 3.8-20.6 5.9-31.8 5.9c-48.6 0-88-39.4-88-88zM256 0L234.7 42.7 192 64l42.7 21.3L256 128l21.3-42.7L320 64 277.3 42.7 256 0zM400 96L160 304l0 48 64 0 0 160 352 0 0-160 64 0 0-48L400 96zM352 288l96 0 0 96-96 0 0-96zM74.7 362.7L32 384l42.7 21.3L96 448l21.3-42.7L160 384l-42.7-21.3L96 320 74.7 362.7z" />
    </Icon>
);

export default HouseNight;