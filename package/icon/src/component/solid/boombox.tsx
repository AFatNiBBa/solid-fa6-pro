
import { Icon } from "../../index";

/**
 * A component that renders the `boombox` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=solid boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M120 48l400 0c22.1 0 40 17.9 40 40l0 72-112 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-32 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-32 0c0-17.7-14.3-32-32-32s-32 14.3-32 32L80 160l0-72c0-22.1 17.9-40 40-40zM608 168.6L608 88c0-48.6-39.4-88-88-88L120 0C71.4 0 32 39.4 32 88l0 80.6C12.9 179.6 0 200.3 0 224L0 448c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-224c0-23.7-12.9-44.4-32-55.4zM256 336A80 80 0 1 0 96 336a80 80 0 1 0 160 0zM64 336a112 112 0 1 1 224 0A112 112 0 1 1 64 336zm400 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224z" />
    </Icon>
);

export default Boombox;