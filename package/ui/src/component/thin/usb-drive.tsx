
import { Icon } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=thin usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 112c-26.5 0-48 21.5-48 48l0 192c0 26.5 21.5 48 48 48l352 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 160c0-35.3 28.7-64 64-64l352 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 416c-35.3 0-64-28.7-64-64L0 160zM480 384l0-16 128 0c8.8 0 16-7.2 16-16l0-192c0-8.8-7.2-16-16-16l-128 0 0-16 128 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-128 0zm64-80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-112a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm32-16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default UsbDrive;