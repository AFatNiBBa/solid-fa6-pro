
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard-play` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard-play?s=sharp-light clapperboard-play}
 * @preview ![clapperboard-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clapperboard-play.svg)
 */
const ClapperboardPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 192L32 192l0 256 448 0 0-256zm0-32l0-96-1.4 0-96 96 97.4 0zm-249.4 0l106.7 0 96-96L326.6 64l-96 96zm-45.3 0l96-96L174.6 64l-96 96 106.7 0zM32 64l0 96 1.4 0 96-96L32 64zm480 96l0 16 0 16 0 256 0 32-32 0L32 480 0 480l0-32L0 192l0-16 0-16L0 64 0 32l32 0 448 0 32 0 0 32 0 96zM216.1 226.2l136 80L375.6 320l-23.4 13.8-136 80L192 428l0-28 0-160 0-28 24.1 14.2zM312.4 320L224 268 224 372l88.4-52z" />
    </Icon>
);

export default ClapperboardPlay;