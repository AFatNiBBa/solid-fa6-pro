
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=sharp-thin chart-bullet}
 * @preview ![chart-bullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-bullet.svg)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0 8 0 24 208 0 16 0 0 16 0 128 0 16-16 0-208 0 0 24 0 8-16 0 0-8 0-24L16 224 0 224l0-16L0 80 0 64l16 0 256 0 0-24 0-8 16 0zM160 80l0 128 112 0 0-128L160 80zm128 0l0 128 208 0 0-128L288 80zM144 80L16 80l0 128 128 0 0-128zM384 256l0 8 0 24 112 0 16 0 0 16 0 128 0 16-16 0-112 0 0 24 0 8-16 0 0-8 0-24L16 448 0 448l0-16L0 304l0-16 16 0 352 0 0-24 0-8 16 0zM224 304l0 128 144 0 0-128-144 0zm160 0l0 128 112 0 0-128-112 0zm-176 0L16 304l0 128 192 0 0-128z" />
    </Icon>
);

export default ChartBullet;