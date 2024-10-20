
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=sharp-duotone-solid briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/briefcase-arrow-right.svg)
 */
const BriefcaseArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 480l512 0 0-384L384 96l0-72 0-24L360 0 152 0 128 0l0 24 0 72L0 96zM128 264c8 0 16 0 24 0c50 0 100 0 150.1 0c-13-13-26-26-39-39c-5.7-5.7-11.3-11.3-17-17c11.3-11.3 22.6-22.6 33.9-33.9c5.7 5.7 11.3 11.3 17 17c26.7 26.7 53.3 53.3 80 80c5.7 5.7 11.3 11.3 17 17c-5.7 5.7-11.3 11.3-17 17c-26.7 26.7-53.3 53.3-80 80l-17 17L246.1 368l17-17 39-39c-50 0-100 0-150.1 0c-8 0-16 0-24 0l0-48zM176 48l160 0 0 48L176 96l0-48z" />
        <path d="M280 174.1l17 17 80 80 17 17-17 17-80 80-17 17L246.1 368l17-17 39-39L152 312l-24 0 0-48 24 0 150.1 0-39-39-17-17L280 174.1z" />
    </Icon>
);

export default BriefcaseArrowRight;