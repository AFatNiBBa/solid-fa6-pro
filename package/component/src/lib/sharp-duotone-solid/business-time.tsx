
import { Icon, generic } from "../../index";

/**
 * A component that renders the `business-time` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/business-time?s=sharp-duotone-solid business-time}
 * @preview ![business-time](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/business-time.svg)
 */
const BusinessTime: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 256l192 0 160 0 8.2 0c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7L512 96 384 96l0-72 0-24L360 0 152 0 128 0l0 24 0 72L0 96zM0 288L0 480l360.2 0C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16L192 352l0-64L0 288zM176 48l160 0 0 48L176 96l0-48z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default BusinessTime;