
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=sharp-thin chess-bishop-piece}
 * @preview ![chess-bishop-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-bishop-piece.svg)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M96 32l-8 0 0 16 8 0 9.7 0c-7 6.4-15.4 14.8-23.9 24.9C61.3 97.6 40 133.3 40 176c0 21.4 8 37 17.8 48L56 224l-8 0 0 16 8 0 12.3 0L51.6 384l16.1 0L84.4 240l87.3 0 16.6 144 16.1 0L187.7 240l12.3 0 8 0 0-16-8 0-1.8 0c9.8-11 17.8-26.6 17.8-48c0-42.7-21.3-78.4-41.9-103.1c-8.4-10.1-16.8-18.5-23.9-24.9l9.7 0 8 0 0-16-8 0-32 0s0 0 0 0L96 32zm78.1 192s0 0 0 0l-92.1 0s0 0 0 0C69.7 215.7 56 201 56 176c0-37.3 18.7-69.6 38.1-92.9c9.7-11.6 19.3-20.8 26.6-27.1c2.9-2.5 5.3-4.5 7.3-6c1.9 1.5 4.4 3.5 7.3 6c7.3 6.3 16.9 15.5 26.6 27.1c4.6 5.6 9.2 11.6 13.5 18.2l-45.1 45.1-5.7 5.7L136 163.3l5.7-5.7 42.2-42.2c9.5 17.8 16.1 38.3 16.1 60.5c0 25-13.7 39.7-25.9 48zM48 416l-3.7 0-2.4 2.9-40 48L0 469.1 0 472l0 32 0 8 8 0 240 0 8 0 0-8 0-32 0-2.9-1.9-2.2-40-48-2.4-2.9-3.7 0L48 416zM16 474.9L51.7 432l152.5 0L240 474.9l0 21.1L16 496l0-21.1z" />
    </Icon>
);

export default ChessBishopPiece;