
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=solid pallet-boxes}
 * @preview ![pallet-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pallet-boxes.svg)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32C64 14.3 78.3 0 96 0L288 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32L64 32zM384 96c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128zM0 352c0-17.7 14.3-32 32-32l64 0 224 0 224 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-224 0L96 512l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64-32 0c-17.7 0-32-14.3-32-32zm128 96l160 0 0-64-160 0 0 64zm224 0l160 0 0-64-160 0 0 64z" />
    </Icon>
);

export default PalletBoxes;