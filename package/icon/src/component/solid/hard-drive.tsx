
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=solid hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 184.4c-17-15.2-39.4-24.4-64-24.4L64 256c-24.6 0-47 9.2-64 24.4L0 96zM64 288l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default HardDrive;