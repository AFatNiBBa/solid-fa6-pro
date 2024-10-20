
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill?s=light money-bill}
 * @preview ![money-bill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/money-bill.svg)
 */
const MoneyBill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 96c0 35.3 28.7 64 64 64l0-32c0-17.7-14.3-32-32-32l-32 0zm-32 0L128 96c0 53-43 96-96 96l0 128c53 0 96 43 96 96l320 0c0-53 43-96 96-96l0-128c-53 0-96-43-96-96zM32 384c0 17.7 14.3 32 32 32l32 0c0-35.3-28.7-64-64-64l0 32zm512-32c-35.3 0-64 28.7-64 64l32 0c17.7 0 32-14.3 32-32l0-32zM64 96c-17.7 0-32 14.3-32 32l0 32c35.3 0 64-28.7 64-64L64 96zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM352 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default MoneyBill;