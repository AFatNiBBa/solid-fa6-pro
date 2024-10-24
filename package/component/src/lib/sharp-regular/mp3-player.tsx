
import { Icon } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=sharp-regular mp3-player}
 * @preview ![mp3-player](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mp3-player.svg)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 48l0 416L48 464 48 48l288 0zM48 0L0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-416 0-48L336 0 48 0zM192 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM304 80L80 80l0 112 224 0 0-112z" />
    </Icon>
);

export default Mp3Player;