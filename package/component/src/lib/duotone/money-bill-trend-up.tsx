
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-trend-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-trend-up?s=duotone money-bill-trend-up}
 * @preview ![money-bill-trend-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-bill-trend-up.svg)
 */
const MoneyBillTrendUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L48 256c-26.5 0-48 21.5-48 48zm48 0l48 0c0 26.5-21.5 48-48 48l0-48zm0 112c26.5 0 48 21.5 48 48l-48 0 0-48zm272-32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96-80l48 0 0 48c-26.5 0-48-21.5-48-48zm0 160c0-26.5 21.5-48 48-48l0 48-48 0z" />
        <path d="M477.6 19.8c-1.5-3.7-3.8-7.3-6.9-10.3l-.1-.1C464.8 3.6 456.8 0 448 0c0 0 0 0 0 0L352 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l18.7 0-84.4 84.4L196.8 71.7c-12-10.3-29.7-10.3-41.7 0l-112 96c-13.4 11.5-15 31.7-3.5 45.1s31.7 15 45.1 3.5L176 138.1l91.2 78.1c12.7 10.9 31.6 10.2 43.5-1.7L416 109.3l0 18.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96s0 0 0 0c0 0 0-.1 0-.1c0-4.3-.9-8.4-2.4-12.2z" />
    </Icon>
);

export default MoneyBillTrendUp;