
import { Icon } from "../../index";

/**
 * A component that renders the `gun-squirt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-squirt?s=sharp-solid gun-squirt}
 * @preview ![gun-squirt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gun-squirt.svg)
 */
const GunSquirt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 32l0 24 0 8 384 0 32 0 0 32 0 32 32 0 0 64-32 0 0 32 0 32-32 0-264 0-18 72 42 0 0-16 0-24 48 0 0 24 0 40 0 40 0 24-48 0 0-24 0-16-54 0L192 480 32 480 88.1 255.7C38.8 251.7 0 210.4 0 160c0-47.6 34.6-87.1 80-94.7L80 56l0-24 48 0zm352 96L64 128l0 64 416 0 0-64z" />
    </Icon>
);

export default GunSquirt;