
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-square` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-square?s=solid arrow-down-to-square}
 * @preview ![arrow-down-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-to-square.svg)
 */
const ArrowDownToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M374.6 246.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 242.7 288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-320c0-44.2-35.8-80-80-80l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
    </Icon>
);

export default ArrowDownToSquare;