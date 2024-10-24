
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-circle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-circle-exclamation?s=sharp-duotone-solid bridge-circle-exclamation}
 * @preview ![bridge-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bridge-circle-exclamation.svg)
 */
const BridgeCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 32l32 0 512 0 32 0 0 64-32 0-40 0 0 64 72 0 0 72.2C577.6 207.1 538.5 192 496 192c-69.1 0-128.9 39.8-157.7 97.7c-5.9-1.1-12-1.7-18.3-1.7c-53 0-96 43-96 96l0 96-96 0 0-96c0-53-43-96-96-96l0-128 72 0 0-64L64 96 32 96l0-64zM152 96l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160 48l-32 0 0 32 32 0 0-32zm0-128l0-16-32 0 0 16 0 80 0 16 32 0 0-16 0-80z" />
    </Icon>
);

export default BridgeCircleExclamation;