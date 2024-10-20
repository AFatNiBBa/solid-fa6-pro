
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=sharp-regular chess-bishop-piece}
 * @preview ![chess-bishop-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-bishop-piece.svg)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 32l24 0 80 0 24 0 0 48-20.8 0c6.1 6.4 13.1 14.3 20 23.6C210.8 129.8 232 168.8 232 216c0 15.8-3.7 29-9.2 40l1.2 0 0 48-18.3 0 4.8 48-48.2 0-4.8-48-59 0-4.8 48-48.2 0 4.8-48L32 304l0-48 1.2 0c-5.5-11-9.2-24.2-9.2-40c0-47.2 21.2-86.2 40.8-112.4c7-9.3 13.9-17.2 20-23.6L64 80l0-48zm93.3 224l7.5-5.1c9.6-6.5 19.2-16.9 19.2-34.9c0-13.8-2.6-26.9-6.9-39.2L161 193l-17 17L110.1 176l17-17 26.1-26.1-.4-.5c-8.1-10.8-16.2-19.3-22.2-25.1c-.9-.9-1.8-1.7-2.6-2.5c-.8 .8-1.7 1.6-2.6 2.5c-6 5.8-14.1 14.4-22.2 25.1C86.8 154.2 72 183.2 72 216c0 18.1 9.6 28.5 19.2 34.9l7.5 5.1 58.7 0zM71.5 432L53.8 464l148.5 0-17.8-32L71.5 432zm141.2-48L256 461.9l0 2.1 0 48-48 0L48 512 0 512l0-48 0-2.1L43.3 384l169.4 0z" />
    </Icon>
);

export default ChessBishopPiece;