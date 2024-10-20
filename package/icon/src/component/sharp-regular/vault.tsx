
import { Icon } from "../../index";

/**
 * A component that renders the `vault` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vault?s=sharp-regular vault}
 * @preview ![vault](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/vault.svg)
 */
const Vault: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 48l0 384 480 0 0-384L48 48zM0 0L48 0 528 0l48 0 0 48 0 384 0 48-48 0-16 0 0 8 0 24-48 0 0-24 0-8-352 0 0 8 0 24-48 0 0-24 0-8-16 0L0 480l0-48L0 48 0 0zM320 240a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM80 240a144 144 0 1 1 288 0A144 144 0 1 1 80 240zm144-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272-16c0 17.8-9.7 33.3-24 41.6L472 328l0 24-48 0 0-24 0-110.4c-14.3-8.3-24-23.8-24-41.6c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Vault;