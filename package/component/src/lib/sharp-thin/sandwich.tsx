
import { Icon } from "../../index";

/**
 * A component that renders the `sandwich` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sandwich?s=sharp-thin sandwich}
 * @preview ![sandwich](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sandwich.svg)
 */
const Sandwich: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 80l0 96L16 176l0-96 480 0zM16 64L0 64 0 80l0 96 0 16 16 0 480 0 16 0 0-16 0-96 0-16-16 0L16 64zM0 320l0 8L0 440l0 8 8 0 496 0 8 0 0-8 0-112 0-8-8 0-112 0-2.4 0-2 1.3-67.6 45-67.6-45-2-1.3-2.4 0L8 320l-8 0zm16 16l229.6 0 70 46.7 4.4 3 4.4-3 70-46.7L496 336l0 96L16 432l0-96zM130.8 224.5l-3-1.1-3 1.3-112 48-7.4 3.2 6.3 14.7 7.4-3.2 109-46.7 125 46.9 2.8 1.1 2.8-1.1 125-46.9 109 46.7 7.4 3.2 6.3-14.7-7.4-3.2-112-48-3-1.3-3 1.1L256 271.5 130.8 224.5z" />
    </Icon>
);

export default Sandwich;