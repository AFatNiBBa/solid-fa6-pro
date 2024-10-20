
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=sharp-thin pallet-box}
 * @preview ![pallet-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pallet-box.svg)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 16l0 256-352 0 0-256 112 0 0 108 0 20 16-12 48-36 48 36 16 12 0-20 0-108 112 0zM272 16l96 0 0 96L329.6 83.2 320 76l-9.6 7.2L272 112l0-96zM496 0L384 0 368 0 272 0 256 0 144 0 128 0l0 16 0 256 0 16 16 0 352 0 16 0 0-16 0-256 0-16L496 0zM0 352l0 16 8 0 72 0 0 128L8 496l-8 0 0 16 8 0 72 0 8 0 8 0 216 0 8 0 8 0 216 0 8 0 8 0 72 0 8 0 0-16-8 0-72 0 0-128 72 0 8 0 0-16-8 0-72 0-8 0-8 0-216 0-8 0-8 0L96 352l-8 0-8 0L8 352l-8 0zM96 496l0-128 216 0 0 128L96 496zm232 0l0-128 216 0 0 128-216 0z" />
    </Icon>
);

export default PalletBox;