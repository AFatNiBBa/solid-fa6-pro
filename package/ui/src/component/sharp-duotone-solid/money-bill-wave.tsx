
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-wave` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-wave?s=sharp-duotone-solid money-bill-wave}
 * @preview ![money-bill-wave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-bill-wave.svg)
 */
const MoneyBillWave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 208c15.7 0 30.1-5.6 41.2-15s19-22.5 21.8-37.4c31-.4 61.2-4.3 90-9.6c13.9-2.6 27.5-5.6 40.7-8.7s26-6.3 38.3-9.4c1.3-.3 2.5-.6 3.8-.9c1.2-.3 2.5-.6 3.7-.9c3.5-.9 7-1.8 10.5-2.6c38.2-9.4 72.3-17.3 104-21c5-.6 10-1.1 14.9-1.4c5.1-.4 10.1-.6 15.2-.8c2.2 33.3 30 59.7 63.9 59.7l0 144c-15.7 0-30.1 5.6-41.2 15s-19 22.5-21.8 37.4c-31 .4-61.2 4.3-89.9 9.6c-13.9 2.6-27.5 5.6-40.7 8.7s-26 6.3-38.3 9.4c-1.3 .3-2.6 .6-3.8 .9c-1.2 .3-2.5 .6-3.7 .9c-3.5 .9-7 1.8-10.5 2.6c-37.9 9.4-71.9 17.2-103.4 20.9c-10.5 1.3-20.7 2-30.7 2.3C125.6 378.3 97.9 352 64 352c0-48 0-96 0-144zm144 48c0 53 35.8 96 80 96s80-43 80-96s-35.8-96-80-96s-80 43-80 96z" />
        <path d="M0 60.3L0 451.7c96 48.9 192 24.5 288 0s192-48.9 288 0l0-391.5c-96-48.9-192-24.5-288 0s-192 48.9-288 0zM512 160l0 144c-31.4 0-57.5 22.6-63 52.4c-62.5 .8-121.8 15.7-172.9 28.6c0 0 0 0 0 0c-4.8 1.2-9.5 2.4-14.2 3.6c-50.7 12.6-94.1 22.2-134.2 23.2C125.6 378.3 97.9 352 64 352l0-144c31.4 0 57.5-22.6 63-52.4c62.5-.8 121.8-15.7 172.9-28.6c0 0 0 0 0 0c4.8-1.2 9.5-2.4 14.2-3.6c50.7-12.6 94.1-22.2 134.2-23.2c2.2 33.3 30 59.7 63.9 59.7z" />
    </Icon>
);

export default MoneyBillWave;