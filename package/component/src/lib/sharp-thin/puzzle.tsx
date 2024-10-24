
import { Icon } from "../../index";

/**
 * A component that renders the `puzzle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle?s=sharp-thin puzzle}
 * @preview ![puzzle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/puzzle.svg)
 */
const Puzzle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M296 0l-8 0 0 8 0 64 0 8 8 0 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0-8 0 0 8 0 56 0 8 8 0 56 0 0 16c0 22.1 17.9 40 40 40s40-17.9 40-40l0-16 72 0 8 0 0-8L512 8l0-8-8 0L296 0zm8 64l0-48 192 0 0 168-72 0-8 0 0 8 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24 0-8-8 0-56 0 0-40 24 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-24 0zM8 64L0 64l0 8L0 288 0 504l0 8 8 0 216 0 216 0 8 0 0-8 0-216 0-8-8 0-88 0-8 0 0 8 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32 0-8-8 0-56 0 0-208 0-8-8 0L8 64zM216 80l0 200-48 0 0-24c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 24-72 0L16 80l200 0zM96 296l8 0 0-8 0-32c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 0 8 8 0 56 0 0 48-24 0c-22.1 0-40 17.9-40 40s17.9 40 40 40l24 0 0 72L16 496l0-200 80 0zM232 416l0-8-8 0-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 8 0 0-8 0-56 48 0 0 24c0 22.1 17.9 40 40 40s40-17.9 40-40l0-24 72 0 0 200-200 0 0-80z" />
    </Icon>
);

export default Puzzle;