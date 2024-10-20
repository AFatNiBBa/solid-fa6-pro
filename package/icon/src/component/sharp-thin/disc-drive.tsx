
import { Icon } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=sharp-thin disc-drive}
 * @preview ![disc-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/disc-drive.svg)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l8 0 432 0 8 0 0 8 0 424 24 0 8 0 0 16-8 0-32 0L40 480 8 480l-8 0 0-16 8 0 24 0L32 40l0-8zM48 464l416 0 0-416L48 48l0 416zM96 256a160 160 0 1 1 320 0A160 160 0 1 1 96 256zM256 400a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default DiscDrive;