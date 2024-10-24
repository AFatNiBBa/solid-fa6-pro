
import { Icon } from "../../index";

/**
 * A component that renders the `head-side` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=sharp-thin head-side}
 * @preview ![head-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/head-side.svg)
 */
const HeadSide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 224C16 109.1 109.1 16 224 16l24 0c95.7 0 172.5 77.9 176 172.7l.1 3.4 2.6 2.3L496 256l0 64-56 0-8 0 0 8 0 104-120 0-8 0 0 8 0 64 0 8 16 0 0-8 0-56 120 0 8 0 0-8 0-104 56 0 8 0 0-8 0-75.6 0-3.6-2.7-2.4-69.5-61.8C434.3 83.3 351.6 0 248 0L224 0C100.3 0 0 100.3 0 224c0 59.1 23.7 114.5 64 156.7L64 504l0 8 16 0 0-8 0-126.5 0-3.3-2.3-2.3C38.7 332.1 16 279.7 16 224zm320 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default HeadSide;