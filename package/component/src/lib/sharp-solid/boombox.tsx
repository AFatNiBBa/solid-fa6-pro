
import { Icon } from "../../index";

/**
 * A component that renders the `boombox` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=sharp-solid boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 0L56 0 584 0l24 0 0 24 0 136 32 0 0 352L0 512 0 160l32 0L32 24 32 0zM80 160l112 0 0-32 64 0 0 32 32 0 0-32 64 0 0 32 32 0 0-32 64 0 0 32 112 0 0-112L80 48l0 112zM96 336a80 80 0 1 1 160 0A80 80 0 1 1 96 336zm192 0A112 112 0 1 0 64 336a112 112 0 1 0 224 0zm176-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 192a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </Icon>
);

export default Boombox;