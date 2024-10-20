
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-root` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=duotone square-root}
 * @preview ![square-root](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-root.svg)
 */
const SquareRoot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M282.6 78.1c8-27.3 33-46.1 61.4-46.1l200 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L344 96 238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288 32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l45.6 0c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8L282.6 78.1z" />
    </Icon>
);

export default SquareRoot;