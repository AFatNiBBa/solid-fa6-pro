
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ribbon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ribbon?s=sharp-duotone-solid ribbon}
 * @preview ![ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ribbon.svg)
 */
const Ribbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 448l112 64L226.9 386.9c-27.8-31.9-55.6-63.7-83.3-95.6L0 448zM96 64c16.9 18.4 33.7 36.8 50.6 55.2L224 96l77.4 23.2L352 64 304 0 144 0 96 64z" />
        <path d="M96 64L448 448 336 512 64 200l0-88L96 64zM328.4 270.2L245.7 180 352 64l32 56 0 88-55.6 62.2z" />
    </Icon>
);

export default Ribbon;