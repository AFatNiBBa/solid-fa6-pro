
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight?s=sharp-regular chess-knight}
 * @preview ![chess-knight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-knight.svg)
 */
const ChessKnight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M88 0L64 0l0 24 0 32 0 12 9.6 7.2L80 80l-6.4 4.8L64 92l0 12-.4 151.6 0 12.4 10.1 7.2 19.3 13.8L75.5 299.5l-11.5 7L64 320l0 32 48 0 0-18.5 124.5-75.9L257 245.1l-25-41-20.5 12.5-74 45.1-25.9-18.5L112 116l22.4-16.8L160 80 134.4 60.8 117.3 48l109.3 0C304.7 48 368 111.3 368 189.4c0 8.3-.7 16.6-2.2 24.8L341.3 352l48.8 0 23-129.4c1.9-10.9 2.9-22 2.9-33.2C416 84.8 331.2 0 226.6 0L88 0zM68.7 464l16.6-32 277.6 0 16.6 32L68.7 464zM432 461.3L392 384 56 384 16 461.3l0 2.7 0 48 48 0 320 0 48 0 0-48 0-2.7zM172 168a20 20 0 1 0 0-40 20 20 0 1 0 0 40z" />
    </Icon>
);

export default ChessKnight;