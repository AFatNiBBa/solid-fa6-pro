
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-line?s=sharp-duotone-solid arrow-right-from-line}
 * @preview ![arrow-right-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-from-line.svg)
 */
const ArrowRightFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 65.4l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M445.3 257.4L422.6 280l-128 128L272 430.6l-45.3-45.3 22.6-22.6 73.4-73.4-162.7 0-32 0 0-64 32 0 162.7 0L249.4 152l-22.6-22.6L272 84.1l22.6 22.6 128 128 22.6 22.6z" />
    </Icon>
);

export default ArrowRightFromLine;