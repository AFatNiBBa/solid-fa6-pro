
import { Icon } from "../../index";

/**
 * A component that renders the `money-bills` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=light money-bills}
 * @preview ![money-bills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/money-bills.svg)
 */
const MoneyBills: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 64c17.7 0 32 14.3 32 32l0 32c-35.3 0-64-28.7-64-64l32 0zM224 64l288 0c0 53 43 96 96 96l0 96c-53 0-96 43-96 96l-288 0c0-53-43-96-96-96l0-96c53 0 96-43 96-96zM128 288c35.3 0 64 28.7 64 64l-32 0c-17.7 0-32-14.3-32-32l0-32zm416 64c0-35.3 28.7-64 64-64l0 32c0 17.7-14.3 32-32 32l-32 0zM192 64c0 35.3-28.7 64-64 64l0-32c0-17.7 14.3-32 32-32l32 0zM160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM368 272a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-96-64a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 368c0 61.9 50.1 112 112 112l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-416 0c-44.2 0-80-35.8-80-80l0-256z" />
    </Icon>
);

export default MoneyBills;