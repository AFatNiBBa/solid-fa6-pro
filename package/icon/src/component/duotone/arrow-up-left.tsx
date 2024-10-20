
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=duotone arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 160l45.3 0L342.6 361.4c6.2 6.2 9.4 14.4 9.4 22.6s-3.1 16.4-9.4 22.6s-14.4 9.4-22.6 9.4s-16.4-3.1-22.6-9.4L96 205.3 96 160z" />
        <path d="M32 128c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224z" />
    </Icon>
);

export default ArrowUpLeft;