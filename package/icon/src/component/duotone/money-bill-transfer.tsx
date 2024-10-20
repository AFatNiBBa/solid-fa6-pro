
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-transfer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-transfer?s=duotone money-bill-transfer}
 * @preview ![money-bill-transfer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-bill-transfer.svg)
 */
const MoneyBillTransfer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 128l0 214.5 19.2-19.2c20.3-20.3 53.2-20.3 73.5 0C138 336.5 142.6 355 138.6 372L256 372c28.7 0 52 23.3 52 52c0 8.7-2.1 16.8-5.9 24L544 448c35.3 0 64-28.7 64-64l0-214.5-19.2 19.2c-20.3 20.3-53.2 20.3-73.5 0C502 175.5 497.4 157 501.4 140L384 140c-28.7 0-52-23.3-52-52c0-8.7 2.1-16.8 5.9-24L96 64c-35.3 0-64 28.7-64 64zm64 0l64 0c0 35.3-28.7 64-64 64l0-64zM416 256a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zm64 128c0-35.3 28.7-64 64-64l0 64-64 0z" />
        <path d="M558.1 64L384 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l174.1 0-23 23c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l64-64c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17L569 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l23 23zM81.9 400l23-23c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 407c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23L256 448c13.3 0 24-10.7 24-24s-10.7-24-24-24L81.9 400z" />
    </Icon>
);

export default MoneyBillTransfer;