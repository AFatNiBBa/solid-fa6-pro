
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=thin hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 213.7C27.7 296.4 44.9 288 64 288l384 0c19.1 0 36.3 8.4 48 21.7L496 96c0-26.5-21.5-48-48-48L64 48zM16 352l0 64c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L64 304c-26.5 0-48 21.5-48 48zM0 352L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 256 0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64zm320 16a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm32 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default HardDrive;