
import { Icon } from "../../index";

/**
 * A component that renders the `vault` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=sharp-thin vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 16l0 448 48 0 16 0 416 0 16 0 48 0 0-448L16 16zM64 480l-48 0L0 480l0-16L0 16 0 0 16 0 560 0l16 0 0 16 0 448 0 16-16 0-48 0 0 24 0 8-16 0 0-8 0-24L80 480l0 24 0 8-16 0 0-8 0-24zM368 240A144 144 0 1 0 80 240a144 144 0 1 0 288 0zM64 240a160 160 0 1 1 320 0A160 160 0 1 1 64 240zm160 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm272 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 0c0 23.8-17.3 43.5-40 47.3L472 344l0 8-16 0 0-8 0-120.7c-22.7-3.8-40-23.6-40-47.3c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Vault;