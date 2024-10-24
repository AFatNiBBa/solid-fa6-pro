
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-play` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-play?s=thin magnifying-glass-play}
 * @preview ![magnifying-glass-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/magnifying-glass-play.svg)
 */
const MagnifyingGlassPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm64-208L161.8 272l0-128L272 208zM169.8 130.2c-10.5-6.1-24 1.7-24 13.8l0 128c0 12.1 13.6 19.9 24 13.8l110.2-64c10.4-6.1 10.4-21.6 0-27.7l-110.2-64z" />
    </Icon>
);

export default MagnifyingGlassPlay;