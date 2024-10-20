
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=duotone square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 32 64 0 0-32c0-17.7 14.3-32 32-32l32 0 0-64L96 32C43 32 0 75 0 128zM0 352l0 32c0 53 43 96 96 96l32 0 0-64-32 0c-17.7 0-32-14.3-32-32l0-32L0 352zM320 32l0 64 32 0c17.7 0 32 14.3 32 32l0 32 64 0 0-32c0-53-43-96-96-96l-32 0zm0 384l0 64 32 0c53 0 96-43 96-96l0-32-64 0 0 32c0 17.7-14.3 32-32 32l-32 0z" />
        <path d="M0 192L0 320l64 0 0-128L0 192zm384 0l0 128 64 0 0-128-64 0zM160 480l128 0 0-64-128 0 0 64zm0-384l128 0 0-64L160 32l0 64z" />
    </Icon>
);

export default SquareDashed;