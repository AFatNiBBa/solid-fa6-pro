
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-square` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-square?s=solid arrow-up-from-square}
 * @preview ![arrow-up-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-up-from-square.svg)
 */
const ArrowUpFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 224 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96zM64 112c0-8.8 7.2-16 16-16l8 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-8 0C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-320c0-44.2-35.8-80-80-80l-8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l8 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320z" />
    </Icon>
);

export default ArrowUpFromSquare;