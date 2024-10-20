
import { Icon } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=light backward-fast}
 * @preview ![backward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/backward-fast.svg)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 64c8.8 0 16 7.2 16 16l0 135.8L210.6 70.2c5-4 11.2-6.2 17.6-6.2C243.6 64 256 76.4 256 91.8l0 150.1L466.6 70.2c5-4 11.2-6.2 17.6-6.2C499.6 64 512 76.4 512 91.8l0 328.4c0 15.4-12.4 27.8-27.8 27.8c-6.4 0-12.6-2.2-17.6-6.2L256 270.1l0 150.1c0 15.4-12.4 27.8-27.8 27.8c-6.4 0-12.6-2.2-17.6-6.2L32 296.2 32 432c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 270.1l0-28.2L0 80c0-8.8 7.2-16 16-16zM33.3 256L224 411.4l0-310.7L33.3 256zM480 100.6L289.3 256 480 411.4l0-310.7z" />
    </Icon>
);

export default BackwardFast;