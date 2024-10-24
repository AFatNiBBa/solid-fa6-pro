
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag?s=sharp-light hashtag}
 * @preview ![hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hashtag.svg)
 */
const Hashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M445.9 144L432 144l-85.7 0L372.1 32l-32.8 0L313.4 144l-127.2 0L212.1 32l-32.8 0L153.4 144 48 144l-1.1 0-6.4 32 7.5 0 98 0L109.1 336 16 336l-7.5 0L2.1 368 16 368l85.7 0L75.9 480l32.8 0 25.8-112 127.2 0L235.9 480l32.8 0 25.8-112L400 368l1.1 0 6.4-32-7.5 0-98 0 36.9-160 93.1 0 7.5 0 6.4-32zm-267 32L306 176 269.1 336 142 336l36.9-160z" />
    </Icon>
);

export default Hashtag;