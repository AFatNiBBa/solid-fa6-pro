
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill?s=sharp-thin money-bill}
 * @preview ![money-bill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/money-bill.svg)
 */
const MoneyBill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 80l0 352 544 0 0-352L16 80zM0 64l16 0 544 0 16 0 0 16 0 352 0 16-16 0L16 448 0 448l0-16L0 80 0 64zM536 184l-8 0c-39.8 0-72-32.2-72-72l0-8 0-8 16 0 0 8 0 8c0 30.9 25.1 56 56 56l8 0 8 0 0 16-8 0zM32 184l0-16 8 0 8 0c30.9 0 56-25.1 56-56l0-8 0-8 16 0 0 8 0 8c0 39.8-32.2 72-72 72l-8 0-8 0zM536 328l8 0 0 16-8 0-8 0c-30.9 0-56 25.1-56 56l0 8 0 8-16 0 0-8 0-8c0-39.8 32.2-72 72-72l8 0zM32 328l8 0 8 0c39.8 0 72 32.2 72 72l0 8 0 8-16 0 0-8 0-8c0-30.9-25.1-56-56-56l-8 0-8 0 0-16zm336-72a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default MoneyBill;