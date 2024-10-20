
import { Icon } from "../../index";

/**
 * A component that renders the `puzzle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle?s=sharp-light puzzle}
 * @preview ![puzzle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/puzzle.svg)
 */
const Puzzle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 0L288 0l0 16 0 56 0 16 16 0 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0-16 0 0 16 0 56 0 16 16 0 48 0c0 26.5 21.5 48 48 48s48-21.5 48-48l48 0 16 0 0-16 0-176 0-16L496 0 304 0zm16 56l0-24 160 0 0 144-48 0-16 0 0 16 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16 0-16-16 0-48 0 0-24 16 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-16 0zM16 64L0 64 0 80 0 288 0 496l0 16 16 0 208 0 208 0 16 0 0-16 0-208 0-16-16 0-80 0-16 0 0 16 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32 0-16-16 0-48 0 0-192 0-16-16 0L16 64zM208 96l0 176-32 0 0-16c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 16-48 0L32 96l176 0zM96 304l16 0 0-16 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 16 16 0 48 0 0 32-16 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l16 0 0 48L32 480l0-176 64 0zM240 416l0-16-16 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 16 0 0-16 0-48 32 0 0 16c0 26.5 21.5 48 48 48s48-21.5 48-48l0-16 48 0 0 176-176 0 0-64z" />
    </Icon>
);

export default Puzzle;