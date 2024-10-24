
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-left-from-circle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left-from-circle?s=duotone arrow-up-left-from-circle}
 * @preview ![arrow-up-left-from-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-left-from-circle.svg)
 */
const ArrowUpLeftFromCircle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M66.6 320c0 1.8 .1 3.5 .4 5.3C84.9 431.3 177 512 288 512c123.7 0 224-100.3 224-224c0-111-80.7-203.1-186.7-220.9c-1.8-.3-3.6-.4-5.3-.4c-15.3 0-28.9 11.1-31.5 26.7c-2.9 17.4 8.8 33.9 26.3 36.9C390.4 142.9 448 208.8 448 288c0 88.4-71.6 160-160 160c-79.2 0-145.1-57.6-157.8-133.3c-2.9-17.4-19.4-29.2-36.9-26.3c-15.6 2.6-26.7 16.2-26.7 31.5z" />
        <path d="M32 0L192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-82.7 0L342.6 297.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L64 109.3 64 192c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0z" />
    </Icon>
);

export default ArrowUpLeftFromCircle;