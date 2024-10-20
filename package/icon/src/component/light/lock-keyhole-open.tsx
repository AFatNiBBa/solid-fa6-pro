
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=light lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 32c-53 0-96 43-96 96l0 64 16 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 272c0-44.2 35.8-80 80-80l240 0 0-64C320 57.3 377.3 0 448 0s128 57.3 128 128l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-53-43-96-96-96zM80 224c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-32 0L80 224zM264 368l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
    </Icon>
);

export default LockKeyholeOpen;