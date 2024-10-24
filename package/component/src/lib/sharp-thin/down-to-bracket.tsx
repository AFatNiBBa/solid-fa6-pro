
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-bracket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-bracket?s=sharp-thin down-to-bracket}
 * @preview ![down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/down-to-bracket.svg)
 */
const DownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 160l-16 0-64 0-16 0 0 16 0 16L212.7 340.7 224 352l11.3-11.3L384 192l0-16 0-16-16 0-64 0-16 0 0-16 0-128 0-16L272 0 176 0 160 0l0 16 0 128 0 16zm0 16l16 0 0-16 0-144 96 0 0 144 0 16 16 0 80 0 0 9.4-144 144L80 185.4l0-9.4 80 0zM16 328l0-8L0 320l0 8L0 504c0 4.4 3.6 8 8 8l432 0c4.4 0 8-3.6 8-8l0-176 0-8-16 0 0 8 0 168L16 496l0-168z" />
    </Icon>
);

export default DownToBracket;