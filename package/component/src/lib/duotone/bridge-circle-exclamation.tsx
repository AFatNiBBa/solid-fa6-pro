
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-circle-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-circle-exclamation?s=duotone bridge-circle-exclamation}
 * @preview ![bridge-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bridge-circle-exclamation.svg)
 */
const BridgeCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 64c0-17.7 14.3-32 32-32l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-40 0 0 64 72 0 0 72.2C577.6 207.1 538.5 192 496 192c-69.1 0-128.9 39.8-157.7 97.7c-5.9-1.1-12-1.7-18.3-1.7c-53 0-96 43-96 96l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c0-53-43-96-96-96l0-128 72 0 0-64L64 96C46.3 96 32 81.7 32 64zM152 96l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm168 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-8-152c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80z" />
    </Icon>
);

export default BridgeCircleExclamation;