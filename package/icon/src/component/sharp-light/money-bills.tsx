
import { Icon } from "../../index";

/**
 * A component that renders the `money-bills` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=sharp-light money-bills}
 * @preview ![money-bills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/money-bills.svg)
 */
const MoneyBills: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 64l0 64c-35.3 0-64-28.7-64-64l64 0zM224 64l288 0c0 53 43 96 96 96l0 96c-53 0-96 43-96 96l-288 0c0-53-43-96-96-96l0-96c53 0 96-43 96-96zM128 288c35.3 0 64 28.7 64 64l-64 0 0-64zm416 64c0-35.3 28.7-64 64-64l0 64-64 0zM192 64c0 35.3-28.7 64-64 64l0-64 64 0zM128 32L96 32l0 32 0 288 0 32 32 0 480 0 32 0 0-32 0-288 0-32-32 0L128 32zM368 272a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-96-64a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM32 112l0-16L0 96l0 16L0 464l0 16 16 0 512 0 16 0 0-32-16 0L32 448l0-336z" />
    </Icon>
);

export default MoneyBills;