
import { Icon, generic } from "../../index";

/**
 * A component that renders the `puzzle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle?s=duotone puzzle}
 * @preview ![puzzle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/puzzle.svg)
 */
const Puzzle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 448c0 35.3 28.7 64 64 64l160 0 0-64c0-8.8-7.2-16-16-16l-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0c8.8 0 16-7.2 16-16l0-64-64 0c-8.8 0-16-7.2-16-16l0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 16c0 8.8-7.2 16-16 16L0 288zM304 16l0 48c0 8.8 7.2 16 16 16l16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l36 0c6.6 0 12 5.4 12 12l0 4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-4c0-6.6 5.4-12 12-12l52 0c8.8 0 16-7.2 16-16l0-128c0-35.3-28.7-64-64-64L320 0c-8.8 0-16 7.2-16 16z" />
        <path d="M0 288l64 0c8.8 0 16-7.2 16-16l0-16c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16c0 8.8 7.2 16 16 16l64 0 0-68c0-6.6 5.4-12 12-12l4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-4 0c-6.6 0-12-5.4-12-12l0-52c0-8.8-7.2-16-16-16L64 64C28.7 64 0 92.7 0 128L0 288zm224 0l0 64c0 8.8-7.2 16-16 16l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0c8.8 0 16 7.2 16 16l0 64 160 0c35.3 0 64-28.7 64-64l0-144c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16l0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16c0-8.8-7.2-16-16-16l-64 0z" />
    </Icon>
);

export default Puzzle;