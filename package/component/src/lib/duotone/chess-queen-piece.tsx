
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=duotone chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416 4.8 473.6C1.7 477.8 0 482.8 0 488z" />
        <path d="M152 24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM67.6 192.4C56.5 194.5 48 204.2 48 216c0 12.9 10.2 23.4 23 24L48 416l160 0L185 240c12.8-.5 23-11.1 23-24c0-11.8-8.5-21.5-19.6-23.6l41.5-67.5c3.7-6 3-13.6-1.6-18.9s-12.1-6.9-18.6-4.1c-3 1.3-6.3 2.1-9.8 2.1c-11.8 0-21.6-8.5-23.6-19.7c-1.1-6.3-6-11.4-12.3-12.8s-12.8 1.1-16.5 6.4C143.2 84 136.1 88 128 88s-15.2-4-19.6-10.1c-3.7-5.3-10.2-7.8-16.5-6.4S80.8 78 79.6 84.3C77.6 95.5 67.8 104 56 104c-3.5 0-6.8-.7-9.8-2.1c-6.4-2.9-13.9-1.2-18.6 4.1s-5.3 13-1.6 18.9l41.5 67.5z" />
    </Icon>
);

export default ChessQueenPiece;