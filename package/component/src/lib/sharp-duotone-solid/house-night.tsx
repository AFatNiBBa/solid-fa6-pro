
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-night` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-night?s=sharp-duotone-solid house-night}
 * @preview ![house-night](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-night.svg)
 */
const HouseNight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 112c0 61.9 50.1 112 112 112c40.6 0 76.1-21.6 95.8-53.9c-9.9 3.8-20.6 5.9-31.8 5.9c-48.6 0-88-39.4-88-88c0-38.1 24.2-70.5 58-82.7C135.3 1.8 123.8 0 112 0C50.1 0 0 50.1 0 112zM32 384l42.7 21.3L96 448l21.3-42.7L160 384l-42.7-21.3L96 320 74.7 362.7 32 384zM192 64l42.7 21.3L256 128l21.3-42.7L320 64 277.3 42.7 256 0 234.7 42.7 192 64z" />
        <path d="M160 304L400 96 640 304l0 48-64 0 0 160-352 0 0-160-64 0 0-48zm288-16l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default HouseNight;