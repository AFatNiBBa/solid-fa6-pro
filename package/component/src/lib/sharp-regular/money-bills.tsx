
import { Icon } from "../../index";

/**
 * A component that renders the `money-bills` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=sharp-regular money-bills}
 * @preview ![money-bills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/money-bills.svg)
 */
const MoneyBills: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528 80c0 35.3 28.7 64 64 64l0 128c-35.3 0-64 28.7-64 64l-320 0c0-35.3-28.7-64-64-64l0-128c35.3 0 64-28.7 64-64l320 0zM144 32L96 32l0 48 0 256 0 48 48 0 448 0 48 0 0-48 0-256 0-48-48 0L144 32zM448 208a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default MoneyBills;