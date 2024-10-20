
import { Icon } from "../../index";

/**
 * A component that renders the `broom` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom?s=sharp-thin broom}
 * @preview ![broom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/broom.svg)
 */
const Broom: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M343.3 244l46.3 46.3 2.3 2.3 0 3.3 0 16 0 7.1-7 .9L336.5 326l2.5 32.7c3.2 41.4-11.9 82.2-41.3 111.6C271 497 234.8 512 197 512L16 512 0 512l0-16 0-16 93.3-80L112 384l-24.6 0L80 384l-16 0 0-5c0-3.7 .1-7.3 .4-11c2.6-33.7 17.2-65.6 41.3-89.7c29.4-29.4 70.2-44.5 111.6-41.3l32.7 2.5 6.1-48.5 .9-7 7.1 0 16 0 3.3 0 2.3 2.3L332 232.7 562.3 2.3l11.3 11.3L343.3 244zM376 304.9l0-5.6L276.7 200l-5.6 0-6.1 48.9 62.1 62.1 48.9-6.1zM80.5 368l31.5 0 43.3 0-32.8 28.1L16 487.4l0 8.6 181 0c33.5 0 65.7-13.3 89.4-37c26.1-26.1 39.5-62.3 36.6-99l-2.5-32.8-71.6-71.6L216.1 253c-36.8-2.8-73 10.6-99 36.6C95.9 310.7 83 338.5 80.5 368z" />
    </Icon>
);

export default Broom;