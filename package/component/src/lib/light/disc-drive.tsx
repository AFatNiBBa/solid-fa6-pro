
import { Icon } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=light disc-drive}
 * @preview ![disc-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/disc-drive.svg)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 64l320 0c17.7 0 32 14.3 32 32l0 352L64 448 64 96c0-17.7 14.3-32 32-32zM480 448l0-352c0-35.3-28.7-64-64-64L96 32C60.7 32 32 60.7 32 96l0 352-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 416 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0zM256 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zM96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DiscDrive;