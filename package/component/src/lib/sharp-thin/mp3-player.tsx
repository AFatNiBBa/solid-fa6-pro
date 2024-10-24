
import { Icon } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=sharp-thin mp3-player}
 * @preview ![mp3-player](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mp3-player.svg)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM80 80l0 96 224 0 0-96L80 80zM64 64l16 0 224 0 16 0 0 16 0 96 0 16-16 0L80 192l-16 0 0-16 0-96 0-16zM192 432a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm16 112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Mp3Player;