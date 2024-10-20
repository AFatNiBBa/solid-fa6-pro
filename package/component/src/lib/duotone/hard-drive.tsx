
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=duotone hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 224c0 5.5-.7 10.8-2 16c-3.6-13.8-11.6-25.8-22.5-34.4c-5.4-4.3-11.6-7.7-18.2-10c-3.3-1.2-6.8-2.1-10.3-2.7c-1.8-.3-3.6-.5-5.4-.7c-.9-.1-1.8-.1-2.8-.2s-1.8-.1-2.8-.1L64 288c-29.8 0-54.9 20.4-62 48c-1.3-5.1-2-10.5-2-16L0 96zM352 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M0 352c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64zm352 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default HardDrive;