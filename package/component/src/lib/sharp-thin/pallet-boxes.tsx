
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=sharp-thin pallet-boxes}
 * @preview ![pallet-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pallet-boxes.svg)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 16L80 16l0 256 224 0 0-256zM80 0L304 0l16 0 0 16 0 256 0 16-16 0L80 288l-16 0 0-16L64 16 64 0 80 0zM560 112l-160 0 0 160 160 0 0-160zM400 96l160 0 16 0 0 16 0 160 0 16-16 0-160 0-16 0 0-16 0-160 0-16 16 0zM0 352l8 0 72 0 8 0 8 0 216 0 8 0 8 0 216 0 8 0 8 0 72 0 8 0 0 16-8 0-72 0 0 128 72 0 8 0 0 16-8 0-72 0-8 0-8 0-216 0-8 0-8 0L96 512l-8 0-8 0L8 512l-8 0 0-16 8 0 72 0 0-128L8 368l-8 0 0-16zM96 496l216 0 0-128L96 368l0 128zm232 0l216 0 0-128-216 0 0 128z" />
    </Icon>
);

export default PalletBoxes;