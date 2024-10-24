
import { Icon } from "../../index";

/**
 * A component that renders the `timer` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timer?s=solid timer}
 * @preview ![timer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/timer.svg)
 */
const Timer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-29.3C378.8 81.9 448 160.9 448 256c0 106-86 192-192 192S64 362 64 256c0-53.7 22-102.3 57.6-137.1c12.6-12.4 12.8-32.6 .5-45.3S89.5 60.8 76.8 73.1C29.5 119.6 0 184.4 0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM193 159c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80z" />
    </Icon>
);

export default Timer;