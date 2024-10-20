
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=solid chess-king}
 * @preview ![chess-king](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-king.svg)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c17.7 0 32 14.3 32 32l0 16 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 48 152 0c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400 80 400 3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40l152 0 0-48-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-16c0-17.7 14.3-32 32-32zM38.6 473.4L80 432l288 0 41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L54.6 512C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z" />
    </Icon>
);

export default ChessKing;