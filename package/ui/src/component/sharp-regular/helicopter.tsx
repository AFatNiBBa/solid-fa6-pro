
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter?s=sharp-regular helicopter}
 * @preview ![helicopter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/helicopter.svg)
 */
const Helicopter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 48l208 0 0 80-198.1 0L81 71l-7-7L64 64 32 64 2.7 64 8.5 92.7l24 120 2.4 12.2 11.4 5 139.9 62.2L287 393l7 7 9.9 0 248 0 24 0 0-24 0-96c0-83.9-68.1-152-152-152l-40 0 0-80 192 0 0-48L128 0l0 48zm0 128l208 0 0 176-22.1 0-97-97c-2.1-2.1-4.5-3.8-7.2-5l-132.6-59L63.1 121l48 48c4.5 4.5 10.6 7 17 7zM528 352l-144 0 0-176 40 0c57.4 0 104 46.6 104 104l0 72zM640 488l0-56-48 0 0 32-368 0 0 48 392 0 24 0 0-24z" />
    </Icon>
);

export default Helicopter;