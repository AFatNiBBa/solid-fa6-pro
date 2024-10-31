
import { Icon } from "../../index";

/**
 * A component that renders the `compass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=sharp-light compass}
 * @preview ![compass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/compass.svg)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm38.7-217.3L178.6 333.4l38.7-116.1 116.1-38.7L294.7 294.7zm51.3-154.1L192 192 140.6 346.1 128 384l37.9-12.6L320 320l51.4-154.1L384 128l-37.9 12.6zM256 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Compass;