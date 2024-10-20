
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=solid pallet-box}
 * @preview ![pallet-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pallet-box.svg)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 0l80 0 0 112c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L320 99.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4 .8s8.5-8.2 8.5-14.1L384 0l80 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48zM0 352c0-17.7 14.3-32 32-32l64 0 224 0 224 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-224 0L96 512l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64-32 0c-17.7 0-32-14.3-32-32zm128 96l160 0 0-64-160 0 0 64zm224 0l160 0 0-64-160 0 0 64z" />
    </Icon>
);

export default PalletBox;