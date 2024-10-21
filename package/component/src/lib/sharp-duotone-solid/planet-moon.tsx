
import { Icon, generic } from "../../index";

/**
 * A component that renders the `planet-moon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/planet-moon?s=sharp-duotone-solid planet-moon}
 * @preview ![planet-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/planet-moon.svg)
 */
const PlanetMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288C0 411.7 100.3 512 224 512s224-100.3 224-224c0-112.8-83.4-206.2-192-221.7c0 31.3 0 62.5 0 93.7c-26.7 32-53.3 64-80 96c10.7 10.7 21.3 21.3 32 32c37.3 0 74.7 0 112 0l0 64L264 456l-40 0c0-24 0-48 0-72l-32 0c0-21.3 0-42.7 0-64l-64-64c-26.7 0-53.3 0-80 0c-12.4-12.4-24.8-24.8-37.1-37.1C3.8 240.6 0 263.9 0 288z" />
        <path d="M512 128A64 64 0 1 0 512 0a64 64 0 1 0 0 128zM224 64C124.4 64 40 129 10.9 218.9L48 256l80 0 64 64 0 64 32 0 0 72 40 0 56-104 0-64-112 0-32-32 80-96 0-93.7c-10.5-1.5-21.1-2.3-32-2.3z" />
    </Icon>
);

export default PlanetMoon;