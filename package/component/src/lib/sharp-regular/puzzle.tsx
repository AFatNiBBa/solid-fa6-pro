
import { Icon } from "../../index";

/**
 * A component that renders the `puzzle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle?s=sharp-regular puzzle}
 * @preview ![puzzle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/puzzle.svg)
 */
const Puzzle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0l0 208-80 0 0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16-64 0 0-64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-80L512 0zM0 240L0 64l224 0 0 80 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 80-64 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-48 0 0 176 176 0 0-48-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-64 80 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 80 0 0 224-192 0-32 0L24 512 0 512l0-24L0 288l0-48z" />
    </Icon>
);

export default Puzzle;