
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=sharp-regular chess-clock-flip}
 * @preview ![chess-clock-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-clock-flip.svg)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 32l160 0 0 48-56 0 0 32 104 0 48 0 0 48 0 272 0 48-48 0L48 480 0 480l0-48L0 160l0-48 48 0 48 0 0-32 160 0 0 32 184 0 0-32-56 0 0-48zM48 160l0 272 544 0 0-272L48 160zm392 32a104 104 0 1 1 0 208 104 104 0 1 1 0-208zm16 48l0-16-32 0 0 16 0 48 0 16 32 0 0-16 0-48zM126.5 222.5A104 104 0 1 1 273.5 369.5 104 104 0 1 1 126.5 222.5zm135.8 33.9l-22.6-22.6-11.3 11.3L194.3 279 183 290.3 205.7 313 217 301.7l33.9-33.9 11.3-11.3z" />
    </Icon>
);

export default ChessClockFlip;