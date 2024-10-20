
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=light wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-224c0-44.2-35.8-80-80-80L112 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48L80 448c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l384 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 32zM384 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Wallet;