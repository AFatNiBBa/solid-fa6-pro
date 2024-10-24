
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-circle-check?s=sharp-duotone-solid bridge-circle-check}
 * @preview ![bridge-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bridge-circle-check.svg)
 */
const BridgeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 32l32 0 512 0 32 0 0 64-32 0-40 0 0 64 72 0 0 72.2C577.6 207.1 538.5 192 496 192c-69.1 0-128.9 39.8-157.7 97.7c-5.9-1.1-12-1.7-18.3-1.7c-53 0-96 43-96 96l0 96-96 0 0-96c0-53-43-96-96-96l0-128 72 0 0-64L64 96 32 96l0-64zM152 96l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336l-11.3 11.3z" />
    </Icon>
);

export default BridgeCircleCheck;