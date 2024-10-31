
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=light clapperboard}
 * @preview ![clapperboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clapperboard.svg)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 192l0 224c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-224L32 192zm350.6-32l97.4 0 0-64c0-9.2-3.9-17.5-10.1-23.3L382.6 160zm-45.3 0l96-96L326.6 64l-96 96 106.7 0zm-56-96L174.6 64l-96 96 106.7 0 96-96zm-152 0L64 64C46.3 64 32 78.3 32 96l0 64 1.4 0 96-96zM512 96l0 64 0 16 0 16 0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192l0-16 0-16L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64z" />
    </Icon>
);

export default Clapperboard;