
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-circle-check?s=duotone bridge-circle-check}
 * @preview ![bridge-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bridge-circle-check.svg)
 */
const BridgeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 64c0-17.7 14.3-32 32-32l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-40 0 0 64 72 0 0 72.2C577.6 207.1 538.5 192 496 192c-69.1 0-128.9 39.8-157.7 97.7c-5.9-1.1-12-1.7-18.3-1.7c-53 0-96 43-96 96l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c0-53-43-96-96-96l0-128 72 0 0-64L64 96C46.3 96 32 81.7 32 64zM152 96l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default BridgeCircleCheck;