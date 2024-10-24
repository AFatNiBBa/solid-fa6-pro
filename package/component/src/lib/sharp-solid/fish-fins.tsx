
import { Icon } from "../../index";

/**
 * A component that renders the `fish-fins` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-fins?s=sharp-solid fish-fins}
 * @preview ![fish-fins](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fish-fins.svg)
 */
const FishFins: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 64l13.5 53.9c-37.7 17.5-67.9 43.1-90.6 67.6L32 128 0 160l48 96L0 352l32 32 114.9-57.5c22.6 24.4 52.8 50 90.6 67.6L224 448l48 32 73.4-64.2C499.1 409.8 576 256 576 256s-76.9-153.8-230.6-159.8L272 32 224 64zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FishFins;