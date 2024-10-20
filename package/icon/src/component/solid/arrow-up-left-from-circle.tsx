
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left-from-circle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left-from-circle?s=solid arrow-up-left-from-circle}
 * @preview ![arrow-up-left-from-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-up-left-from-circle.svg)
 */
const ArrowUpLeftFromCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0L32 0C14.3 0 0 14.3 0 32L0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-82.7L297.4 342.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 64 192 64c17.7 0 32-14.3 32-32s-14.3-32-32-32zM325.3 67.1c-17.4-2.9-33.9 8.8-36.9 26.3s8.8 33.9 26.3 36.9C390.4 142.9 448 208.8 448 288c0 88.4-71.6 160-160 160c-79.2 0-145.1-57.6-157.8-133.3c-2.9-17.4-19.4-29.2-36.9-26.3s-29.2 19.4-26.3 36.9C84.9 431.3 177 512 288 512c123.7 0 224-100.3 224-224c0-111-80.7-203.1-186.7-220.9z" />
    </Icon>
);

export default ArrowUpLeftFromCircle;