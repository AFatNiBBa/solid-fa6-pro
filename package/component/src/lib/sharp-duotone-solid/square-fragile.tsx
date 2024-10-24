
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=sharp-duotone-solid square-fragile}
 * @preview ![square-fragile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-fragile.svg)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM128 96l48 0 64 0 80 0 0 112c0 47.6-34.6 87.1-80 94.7l0 81.3 64 0 0 32-160 0 0-32 64 0 0-81.3c-45.4-7.6-80-47.1-80-94.7l0-112z" />
        <path d="M176 96l-48 0 0 112c0 47.6 34.6 87.1 80 94.7l0 81.3-64 0 0 32 160 0 0-32-64 0 0-81.3c45.4-7.6 80-47.1 80-94.7l0-112-80 0 32 64-48 32 32 64-80-64 32-32L176 96z" />
    </Icon>
);

export default SquareFragile;