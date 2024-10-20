
import { Icon } from "../../index";

/**
 * A component that renders the `timer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timer?s=thin timer}
 * @preview ![timer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/timer.svg)
 */
const Timer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-4.4 0-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8s8-3.6 8-8l0-103.9c128.8 4.2 232 110 232 239.9c0 132.5-107.5 240-240 240S16 388.5 16 256c0-66.3 26.9-126.3 70.3-169.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0C28.7 121.3 0 185.3 0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM165.7 154.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l96 96c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-96-96z" />
    </Icon>
);

export default Timer;