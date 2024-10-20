
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-magnifying-glass?s=sharp-duotone-solid building-magnifying-glass}
 * @preview ![building-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-magnifying-glass.svg)
 */
const BuildingMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 173.3c-25.5 11.1-47.5 28.7-64 50.7l-64 0 0 64 35.2 0c-2.1 10.3-3.2 21-3.2 32c0 65.6 39.5 122 96 146.7l0 45.3-144 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0z" />
        <path d="M528 320.2a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM520 426c-20.5 14-45.3 22.1-72 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l63 62.6 17 16.9-33.8 34-17-16.9L520 426z" />
    </Icon>
);

export default BuildingMagnifyingGlass;