
import { Icon } from "../../index";

/**
 * A component that renders the `puzzle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle?s=sharp-solid puzzle}
 * @preview ![puzzle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/puzzle.svg)
 */
const Puzzle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 0L512 0l0 208-80 0 0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16-64 0 0-64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-80zM0 272L0 64l208 0 0 64 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 80-64 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L0 272zM0 512L0 304l208 0 0 64-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 80L0 512zM240 304l64 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 80 0 0 208-208 0 0-208z" />
    </Icon>
);

export default Puzzle;