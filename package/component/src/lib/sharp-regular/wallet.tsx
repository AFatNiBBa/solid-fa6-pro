
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-regular wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32L0 32 0 56 0 456l0 24 24 0 464 0 24 0 0-24 0-304 0-24-24 0-368 0-24 0 0 48 24 0 344 0 0 256L48 432 48 80l408 0 24 0 0-48-24 0L24 32zM384 336a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Wallet;