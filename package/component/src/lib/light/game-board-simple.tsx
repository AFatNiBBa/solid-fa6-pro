
import { Icon } from "../../index";

/**
 * A component that renders the `game-board-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board-simple?s=light game-board-simple}
 * @preview ![game-board-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/game-board-simple.svg)
 */
const GameBoardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM96 240l112 0 0-112L96 128l0 112zM240 120l0 120 120 0c13.3 0 24 10.7 24 24l0 128c0 13.3-10.7 24-24 24l-128 0c-13.3 0-24-10.7-24-24l0-120L88 272c-13.3 0-24-10.7-24-24l0-128c0-13.3 10.7-24 24-24l128 0c13.3 0 24 10.7 24 24zm0 264l112 0 0-112-112 0 0 112z" />
    </Icon>
);

export default GameBoardSimple;