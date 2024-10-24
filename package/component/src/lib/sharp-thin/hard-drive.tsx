
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=sharp-thin hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 240 480 0 0-240L16 48zm0 256l0 160 480 0 0-160L16 304zM0 288L0 48 0 32l16 0 480 0 16 0 0 16 0 240 0 16 0 160 0 16-16 0L16 480 0 480l0-16L0 304l0-16zm320 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm32 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default HardDrive;