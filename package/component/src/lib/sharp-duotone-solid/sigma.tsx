
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sigma` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=sharp-duotone-solid sigma}
 * @preview ![sigma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sigma.svg)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 480l32 0 320 0 32 0 0-32 0-64 0-32-64 0 0 32 0 32-210.7 0L246.6 278.6 269.3 256l-22.6-22.6L109.3 96 320 96l0 32 0 32 64 0 0-32 0-64 0-32-32 0L32 32 0 32 0 77.3l9.4 9.4L178.7 256 9.4 425.4 0 434.7 0 480z" />
    </Icon>
);

export default Sigma;