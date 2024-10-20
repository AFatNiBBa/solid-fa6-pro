
import { Icon } from "../../index";

/**
 * A component that renders the `buildings` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/buildings?s=sharp-light buildings}
 * @preview ![buildings](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/buildings.svg)
 */
const Buildings: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32l0 448-224 0 0-448 224 0zM256 0L224 0l0 32 0 448 0 32 32 0 224 0 32 0 0-32 0-448 0-32L480 0 256 0zM192 128l-16 0L16 128 0 128l0 16L0 496l0 16 16 0 160 0 16 0 0-32-16 0L32 480l0-320 144 0 16 0 0-32zM80 320l-16 0 0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0-64 0zm16 64l0-32 32 0 0 32-32 0zm224 32l16 0 64 0 16 0 0-16 0-64 0-16-16 0-64 0-16 0 0 16 0 64 0 16zm32-32l0-32 32 0 0 32-32 0zM80 192l-16 0 0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0-64 0zm16 64l0-32 32 0 0 32-32 0zM320 64l0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0-64 0-16 0zm32 32l32 0 0 32-32 0 0-32zM336 288l64 0 16 0 0-16 0-64 0-16-16 0-64 0-16 0 0 16 0 64 0 16 16 0zm16-64l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default Buildings;