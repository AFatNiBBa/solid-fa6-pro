
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bills` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=duotone money-bills}
 * @preview ![money-bills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-bills.svg)
 */
const MoneyBills: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240c0-13.3-10.7-24-24-24S0 106.7 0 120zm160 40l0 96c35.3 0 64 28.7 64 64l288 0c0-35.3 28.7-64 64-64l0-96c-35.3 0-64-28.7-64-64L224 96c0 35.3-28.7 64-64 64zm288 48a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM512 96c0 35.3 28.7 64 64 64l0 96c-35.3 0-64 28.7-64 64l-288 0c0-35.3-28.7-64-64-64l0-96c35.3 0 64-28.7 64-64l288 0z" />
    </Icon>
);

export default MoneyBills;