
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill?s=thin money-bill}
 * @preview ![money-bill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/money-bill.svg)
 */
const MoneyBill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48L64 80zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm536 56l-8 0c-39.8 0-72-32.2-72-72l0-8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 8c0 30.9 25.1 56 56 56l8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8zM32 176c0-4.4 3.6-8 8-8l8 0c30.9 0 56-25.1 56-56l0-8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 8c0 39.8-32.2 72-72 72l-8 0c-4.4 0-8-3.6-8-8zM536 328c4.4 0 8 3.6 8 8s-3.6 8-8 8l-8 0c-30.9 0-56 25.1-56 56l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8c0-39.8 32.2-72 72-72l8 0zM32 336c0-4.4 3.6-8 8-8l8 0c39.8 0 72 32.2 72 72l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8c0-30.9-25.1-56-56-56l-8 0c-4.4 0-8-3.6-8-8zm336-80a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default MoneyBill;