
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=thin chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 32a32 32 0 1 1 64 0A32 32 0 1 1 96 32zm74.6 48c3.2 .4 5.8 2.7 6.7 5.8c4.3 15.2 18.2 26.3 34.7 26.3c5.2 0 10.1-1.1 14.5-3c3.1-1.4 6.8-.6 9.1 1.9s2.8 6.2 1.2 9.2L181.3 224l10.7 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-14.9 0 18.8 144-16.1 0L161 240l-66 0L76.2 384l-16.1 0L78.9 240 64 240c-4.4 0-8-3.6-8-8s3.6-8 8-8l10.7 0L19.2 120.1c-1.6-3-1.1-6.7 1.2-9.2s6-3.3 9.1-1.9c4.4 1.9 9.3 3 14.5 3c16.5 0 30.4-11.1 34.7-26.3c.9-3.1 3.5-5.4 6.7-5.8s6.3 1.2 7.9 3.9c6.9 12 19.9 20.1 34.7 20.1s27.8-8.1 34.7-20.1c1.6-2.8 4.7-4.3 7.9-3.9zm43.8 48c-.8 0-1.6 .1-2.4 .1c-18.7 0-35-9.8-44.2-24.6C157.7 113.6 143.6 120 128 120s-29.7-6.4-39.8-16.6C79 118.2 62.7 128 44 128c-.8 0-1.6 0-2.4-.1L92.8 224l70.4 0 51.2-96.1zM55.4 432L19.2 474.2c-2.1 2.4-3.2 5.4-3.2 8.6c0 7.3 5.9 13.2 13.2 13.2l197.6 0c7.3 0 13.2-5.9 13.2-13.2c0-3.1-1.1-6.2-3.2-8.6L200.6 432 55.4 432zm0-16l145.3 0c4.7 0 9.1 2 12.1 5.6L249 463.8c4.5 5.3 7 12 7 19c0 16.1-13.1 29.2-29.2 29.2L29.2 512C13.1 512 0 498.9 0 482.8c0-7 2.5-13.7 7-19l36.2-42.2c3-3.5 7.5-5.6 12.1-5.6z" />
    </Icon>
);

export default ChessQueenPiece;