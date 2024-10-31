
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-medical-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-medical-circle-check?s=sharp-duotone-solid house-medical-circle-check}
 * @preview ![house-medical-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-medical-circle-check.svg)
 */
const HouseMedicalCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4 330.7 0c-45.2-31.8-74.7-84.4-74.8-143.8c-.1 8.7-7.2 15.8-16 15.8l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 40.2 0c32.3-39.1 81.1-64 135.8-64c8.3 0 16.5 .6 24.5 1.7L288.4 0 0 240zM320 352l0 15.3c0-5.2 .3-10.3 .7-15.3l-.7 0z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336l-11.3 11.3z" />
    </Icon>
);

export default HouseMedicalCircleCheck;