
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-walking-with-cane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking-with-cane?s=sharp-duotone-solid person-walking-with-cane}
 * @preview ![person-walking-with-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-walking-with-cane.svg)
 */
const PersonWalkingWithCane: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M334.5 337.1l25.6-19.2L472.8 480.6l9.1 13.2L455.6 512l-9.1-13.2-112-161.7z" />
        <path d="M128 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-19.8 80l19.8 0 96 0 16 0 9.6 12.8 96 128 19.2 25.6-51.2 38.4-19.2-25.6L224 213.3l0 74.7 0 18.7 54.6 54.6 9.4 9.4 0 13.3 0 96 0 32-64 0 0-32 0-82.7L146.7 320c-12-12-18.7-28.3-18.7-45.3l0-43.2L92.6 302.3 78.3 330.9 21.1 302.3l14.3-28.6 64-128 8.8-17.7zm20.1 218.8l52.8 52.8-10 40.2-6 24-6 24-6 24-.1 .2-66 0L91 496.2l6-24 6-24 6-24 12-48 7.4-29.4z" />
    </Icon>
);

export default PersonWalkingWithCane;