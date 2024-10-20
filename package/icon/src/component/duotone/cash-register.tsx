
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cash-register` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=duotone cash-register}
 * @preview ![cash-register](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cash-register.svg)
 */
const CashRegister: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32l0 64c0 17.7 14.3 32 32 32l80 0 0 32 64 0 0-32 80 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 0C46.3 0 32 14.3 32 32zM80 64c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 80c-8.8 0-16-7.2-16-16zm8 176a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M0 448l0-69.6c0-4.8 .4-9.6 1.1-14.4L23.8 214.4C28.5 183.1 55.4 160 87 160L425 160c31.6 0 58.5 23.1 63.3 54.4l22.7 149.6c.7 4.8 1.1 9.6 1.1 14.4l0 69.6c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64zm64-16c0 8.8 7.2 16 16 16l352 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 416c-8.8 0-16 7.2-16 16zm48-216a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72 24a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm120-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm120-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default CashRegister;