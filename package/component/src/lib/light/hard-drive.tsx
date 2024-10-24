
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=light hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 168.6c9.4-5.4 20.3-8.6 32-8.6l384 0c11.7 0 22.6 3.1 32 8.6L480 96c0-17.7-14.3-32-32-32L64 64zM32 320l0 96c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L64 288c-17.7 0-32 14.3-32 32zM0 320L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 224 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-96zm320 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default HardDrive;