
import { Icon } from "../../index";

/**
 * A component that renders the `timer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timer?s=sharp-thin timer}
 * @preview ![timer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/timer.svg)
 */
const Timer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0l-8 0 0 8 0 112 0 8 16 0 0-8 0-103.9c128.8 4.2 232 110 232 239.9c0 132.5-107.5 240-240 240S16 388.5 16 256c0-66.3 26.9-126.3 70.3-169.7L75 75C28.7 121.3 0 185.3 0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM165.7 154.3l-5.7-5.7L148.7 160l5.7 5.7 96 96 5.7 5.7L267.3 256l-5.7-5.7-96-96z" />
    </Icon>
);

export default Timer;