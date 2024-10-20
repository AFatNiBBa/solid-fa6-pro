
import { Icon } from "../../index";

/**
 * A component that renders the `fish-cooked` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-cooked?s=sharp-solid fish-cooked}
 * @preview ![fish-cooked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fish-cooked.svg)
 */
const FishCooked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 64c176 0 256 192 256 192s-80 192-256 192c-80.3 0-167.8-57.4-216.9-114.5L0 416l0-48L32 256 0 144 0 96l108.7 76.1C158.7 117.2 242.7 64 320 64zm6.6 96L304 137.4l-11.3 11.3-64 64L217.4 224 240 246.6l11.3-11.3 64-64L326.6 160zm112 16L416 153.4l-11.3 11.3-160 160L233.4 336 256 358.6l11.3-11.3 160-160L438.6 176zm16 112L432 265.4l-11.3 11.3-64 64L345.4 352 368 374.6l11.3-11.3 64-64L454.6 288z" />
    </Icon>
);

export default FishCooked;