
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=sharp-duotone-solid vial-circle-check}
 * @preview ![vial-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vial-circle-check.svg)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 0 288c0 53 43 96 96 96c32.6 0 61.5-16.3 78.8-41.2C197.3 417.1 192 393.2 192 368c0-37.7 11.8-72.6 32-101.2L224 96l32 0 0-64-32 0-64 0L96 32 32 32 0 32zM96 96l64 0 0 96-64 0 0-96z" />
        <path d="M368 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L352 430.6l-11.3-11.3-40-40L289.4 368 312 345.4l11.3 11.3L352 385.4l60.7-60.7L424 313.4 446.6 336l-11.3 11.3z" />
    </Icon>
);

export default VialCircleCheck;