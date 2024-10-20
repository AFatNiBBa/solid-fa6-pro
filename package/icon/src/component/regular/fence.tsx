
import { Icon } from "../../index";

/**
 * A component that renders the `fence` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=regular fence}
 * @preview ![fence](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fence.svg)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32c7.8 0 15 3.7 19.5 10.1l40 56c2.9 4.1 4.5 8.9 4.5 13.9l0 48 64 0 0-48c0-5 1.6-9.9 4.5-13.9l40-56C241 35.7 248.2 32 256 32s15 3.7 19.5 10.1l40 56c2.9 4.1 4.5 8.9 4.5 13.9l0 48 64 0 0-48c0-5 1.6-9.9 4.5-13.9l40-56C433 35.7 440.2 32 448 32s15 3.7 19.5 10.1l40 56c2.9 4.1 4.5 8.9 4.5 13.9l0 336c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-48-64 0 0 48c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-48-64 0 0 48c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 112c0-5 1.6-9.9 4.5-13.9l40-56C49 35.7 56.2 32 64 32zM320 352l64 0 0-144-64 0 0 144zM192 208l-64 0 0 144 64 0 0-144zM48 119.7L48 432l32 0 0-312.3L64 97.3 48 119.7zm192 0L240 432l32 0 0-312.3L256 97.3l-16 22.4zM432 432l32 0 0-312.3L448 97.3l-16 22.4L432 432z" />
    </Icon>
);

export default Fence;