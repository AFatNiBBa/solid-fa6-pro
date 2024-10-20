
import { Icon } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=sharp-light unlock-keyhole}
 * @preview ![unlock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/unlock-keyhole.svg)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32c-53 0-96 43-96 96l0 64 288 0 32 0 0 32 0 256 0 32-32 0L32 512 0 512l0-32L0 224l0-32 32 0 64 0 0-64C96 57.3 153.3 0 224 0c58 0 107 38.6 122.7 91.4L316 100.6C304.2 60.9 267.5 32 224 32zM32 224l0 256 384 0 0-256L32 224zM264 368l-80 0-16 0 0-32 16 0 80 0 16 0 0 32-16 0z" />
    </Icon>
);

export default UnlockKeyhole;