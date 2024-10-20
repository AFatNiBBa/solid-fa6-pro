
import { Icon } from "../../index";

/**
 * A component that renders the `cauldron` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cauldron?s=sharp-solid cauldron}
 * @preview ![cauldron](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cauldron.svg)
 */
const Cauldron: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm112 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM35.1 224C16.5 257 0 297.1 0 334.4c0 37.4 11.9 69.4 32 95.5L32 512l48 0 0-39c40.4 25.5 91.8 39 144 39s103.6-13.5 144-39l0 39 48 0 0-82.1c20.1-26.1 32-58.1 32-95.5c0-37.3-16.5-77.4-35.1-110.4l35.1 0 0-64-80 0-144 0L80 160 0 160l0 64 35.1 0z" />
    </Icon>
);

export default Cauldron;