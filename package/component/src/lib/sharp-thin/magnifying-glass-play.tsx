
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-play` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-play?s=sharp-thin magnifying-glass-play}
 * @preview ![magnifying-glass-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/magnifying-glass-play.svg)
 */
const MagnifyingGlassPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 400c54.6 0 104.2-21 141.3-55.4L499.9 511.3l11.3-11.3L360.6 349.3C395 312.2 416 262.6 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM145.8 134.7l0 146.6 0 18.5 16-9.3 126.2-73.3 15.9-9.3-15.9-9.3L161.8 125.5l-16-9.3 0 18.5zm16 137.3l0-128L272 208 161.8 272z" />
    </Icon>
);

export default MagnifyingGlassPlay;