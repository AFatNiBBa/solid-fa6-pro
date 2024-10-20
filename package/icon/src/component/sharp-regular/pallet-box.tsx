
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=sharp-regular pallet-box}
 * @preview ![pallet-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pallet-box.svg)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 48l-80 0 0 96L320 96l-64 48 0-96-80 0 0 192 288 0 0-192zm0-48l48 0 0 48 0 192 0 48-48 0-288 0-48 0 0-48 0-192 0-48 48 0 80 0L384 0l80 0zM0 320l24 0 40 0 24 0 24 0 184 0 24 0 24 0 184 0 24 0 24 0 40 0 24 0 0 48-24 0-40 0 0 96 40 0 24 0 0 48-24 0-40 0-24 0-24 0-184 0-24 0-24 0-184 0-24 0-24 0-40 0L0 512l0-48 24 0 40 0 0-96-40 0L0 368l0-48zM112 464l184 0 0-96-184 0 0 96zm232 0l184 0 0-96-184 0 0 96z" />
    </Icon>
);

export default PalletBox;