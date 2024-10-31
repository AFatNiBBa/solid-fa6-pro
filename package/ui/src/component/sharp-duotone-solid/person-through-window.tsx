
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-through-window` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-through-window?s=sharp-duotone-solid person-through-window}
 * @preview ![person-through-window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-through-window.svg)
 */
const PersonThroughWindow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm32 109.9l0 18.1 0 128c21.3 0 42.7 0 64 0l0-109.9c24.5 36.6 49 73.2 73.5 109.9c14.2 21.3 28.4 42.7 42.7 64c8.3 12.4 16.6 24.9 24.9 37.3l17.8 26.6 53.3-35.5-17.8-26.6-1.2-1.8c-14.2-21.3-28.4-42.7-42.7-64c-10.7-16-21.3-32-32-48l74.6 0 40 48 83.3 0-3.7-4.5-80-96L415 272l-15 0-78.6 0-35.3-54.4 50.3-30.2 15.5-9.3 0-18.1 0-96-64 0 0 77.9L143.5 228.6 128 237.9z" />
        <path d="M64 64l512 0 0 320-233.5 0 42.7 64L576 448l64 0 0-64 0-320 0-64L576 0 64 0 0 0 0 64 0 384l0 64 64 0 244.2 0-42.7-64L64 384 64 64z" />
    </Icon>
);

export default PersonThroughWindow;