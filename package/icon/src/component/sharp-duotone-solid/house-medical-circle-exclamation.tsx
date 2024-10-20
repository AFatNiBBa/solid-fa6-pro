
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-medical-circle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-medical-circle-exclamation?s=sharp-duotone-solid house-medical-circle-exclamation}
 * @preview ![house-medical-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-medical-circle-exclamation.svg)
 */
const HouseMedicalCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4 330.7 0c-45.2-31.8-74.7-84.4-74.8-143.8c-.1 8.7-7.2 15.8-16 15.8l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 40.2 0c32.3-39.1 81.1-64 135.8-64c8.3 0 16.5 .6 24.5 1.7L288.4 0 0 240zM320 352l0 15.3c0-5.2 .3-10.3 .7-15.3l-.7 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160 48l-32 0 0 32 32 0 0-32zm0-128l0-16-32 0 0 16 0 80 0 16 32 0 0-16 0-80z" />
    </Icon>
);

export default HouseMedicalCircleExclamation;