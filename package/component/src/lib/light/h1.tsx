
import { Icon } from "../../index";

/**
 * A component that renders the `h1` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=light h1}
 * @preview ![h1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/h1.svg)
 */
const H1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 80c0-5.7-3-10.9-7.9-13.8s-10.9-2.9-15.9-.2l-72 40c-7.7 4.3-10.5 14-6.2 21.8s14 10.5 21.8 6.2L464 107.2 464 416l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-336zM32 80c0-8.8-7.2-16-16-16S0 71.2 0 80L0 256 0 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160 256 0 0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 0-176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160L32 240 32 80z" />
    </Icon>
);

export default H1;