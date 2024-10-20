
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=duotone prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 480c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c35.1-35.1 70.2-70.2 105.4-105.4c15.1-15.1 30.2-30.2 45.3-45.3c35.1-35.1 70.2-70.2 105.4-105.4c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6s-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4c-35.1 35.1-70.2 70.2-105.4 105.4c-15.1 15.1-30.2 30.2-45.3 45.3L137.4 457.4c-6.2 6.2-9.4 14.4-9.4 22.6z" />
        <path d="M0 32C0 14.3 14.3 0 32 0L176 0c61.9 0 112 50.1 112 112c0 52.8-36.6 97.1-85.8 108.9L288 306.7 242.7 352l-128-128L64 224l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96L0 32zM288 397.3L333.3 352 438.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 397.3zM64 160l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 64l0 96z" />
    </Icon>
);

export default Prescription;