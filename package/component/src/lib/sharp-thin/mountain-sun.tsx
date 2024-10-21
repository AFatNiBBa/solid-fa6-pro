
import { Icon } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=sharp-thin mountain-sun}
 * @preview ![mountain-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mountain-sun.svg)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 80a64 64 0 1 1 128 0A64 64 0 1 1 496 80zm144 0A80 80 0 1 0 480 80a80 80 0 1 0 160 0zM16 444.9L256 92.4 496 444.9l0 51.1-.2 0L16 496l0-51.1zM16 512l441 0 39 0 16 0 112 0 16 0 0-16 0-62.3L489.6 206.5 480 192l-9.6 14.5-57.9 87.4L265.7 78.2 256 64l-9.7 14.2L0 440l0 56 0 16 16 0zm608-16l-112 0 0-56L422.3 308.2 480 221 624 438.5l0 57.5z" />
    </Icon>
);

export default MountainSun;