
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=sharp-duotone-solid border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l64 0 0-64L0 32zm0 96l0 64 64 0 0-64L0 128zm0 96l0 64 64 0 0-64L0 224zm0 96l0 64 64 0 0-64L0 320zM96 32l0 64 64 0 0-64L96 32zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
        <path d="M448 32l0 32 0 384 0 32-32 0L32 480 0 480l0-64 32 0 352 0 0-352 0-32 64 0z" />
    </Icon>
);

export default BorderBottomRight;