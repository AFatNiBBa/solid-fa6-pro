
import { Icon } from "../../index";

/**
 * A component that renders the `puzzle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle?s=regular puzzle}
 * @preview ![puzzle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/puzzle.svg)
 */
const Puzzle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 0c35.3 0 64 28.7 64 64l0 128c0 8.8-7.2 16-16 16l-52 0c-6.6 0-12 5.4-12 12l0 4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-4c0-6.6-5.4-12-12-12l-36 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16L448 0zM0 240L0 128C0 92.7 28.7 64 64 64l144 0c8.8 0 16 7.2 16 16l0 52c0 6.6 5.4 12 12 12l4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-4 0c-6.6 0-12 5.4-12 12l0 52c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 16c0 8.8-7.2 16-16 16l-32 0 0 152c0 13.3 10.7 24 24 24l152 0 0-36c0-6.6-5.4-12-12-12l-4 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l4 0c6.6 0 12-5.4 12-12l0-36c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 144c0 35.3-28.7 64-64 64l-128 0-16 0L72 512c-39.8 0-72-32.2-72-72L0 272l0-32z" />
    </Icon>
);

export default Puzzle;