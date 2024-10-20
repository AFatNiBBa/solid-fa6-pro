
import { Icon } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=sharp-thin trash-clock}
 * @preview ![trash-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-clock.svg)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M155.6 0L160 0 288 0l4.4 0 2.4 3.8L332.4 64 448 64l0 16L0 80 0 64l115.6 0L153.2 3.8 155.6 0zm128 16L164.4 16l-30 48 179.1 0-30-48zM24 112.8L24 112 40 112 79.2 496l232 0c6.1 5.8 12.7 11.1 19.6 16L72 512l-7.2 0-.7-7.2-40-392zm391.8 79.9c-5.5 .5-11 1.3-16.3 2.3l8.5-83 16.1 0-.1 .8-8.2 79.9zM432 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm8 64l0 8 0 64 48 0 8 0 0 16-8 0-56 0-8 0 0-8 0-72 0-8 16 0z" />
    </Icon>
);

export default TrashClock;