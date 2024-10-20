
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=thin wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M72 32C32.2 32 0 64.2 0 104L0 408c0 39.8 32.2 72 72 72l368 0c39.8 0 72-32.2 72-72l0-224c0-39.8-32.2-72-72-72L72 112c-4.4 0-8 3.6-8 8s3.6 8 8 8l368 0c30.9 0 56 25.1 56 56l0 224c0 30.9-25.1 56-56 56L72 464c-30.9 0-56-25.1-56-56l0-304c0-30.9 25.1-56 56-56l400 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 32zM376 296a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm64 0a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default Wallet;