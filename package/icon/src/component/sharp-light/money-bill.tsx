
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill?s=sharp-light money-bill}
 * @preview ![money-bill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/money-bill.svg)
 */
const MoneyBill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 96c0 35.3 28.7 64 64 64l0-64-64 0zm-32 0L128 96c0 53-43 96-96 96l0 128c53 0 96 43 96 96l320 0c0-53 43-96 96-96l0-128c-53 0-96-43-96-96zM32 416l64 0c0-35.3-28.7-64-64-64l0 64zm512-64c-35.3 0-64 28.7-64 64l64 0 0-64zM32 96l0 64c35.3 0 64-28.7 64-64L32 96zM0 64l32 0 512 0 32 0 0 32 0 320 0 32-32 0L32 448 0 448l0-32L0 96 0 64zM352 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default MoneyBill;