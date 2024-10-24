
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wallet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=duotone wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 80C0 53.5 21.5 32 48 32l384 0c26.5 0 48 21.5 48 48l0 16 0 32 0 8.6c-6.8-3.9-14.4-6.6-22.4-7.9c-2.7-.4-5.5-.6-8.2-.7c-.4 0-.9 0-1.3 0c-21.3 0-42.7 0-64 0c-96 0-192 0-288 0c-16 0-32 0-48 0C21.5 128 0 106.5 0 80z" />
        <path d="M48 128l48 0s0 0 0 0l352 0c.4 0 .9 0 1.3 0c11.2 .2 21.6 3.6 30.7 8.9l0-.3c19.1 11.1 32 31.7 32 55.4l0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 240l0-48L0 80c0 26.5 21.5 48 48 48zM416 336a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Wallet;