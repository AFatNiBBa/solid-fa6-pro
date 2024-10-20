
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=regular blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 80C0 35.8 35.8 0 80 0l48 0 32 0 16.2 0L471 0c20.8 0 36.1 19.6 31 39.8L425.6 345.5C457.8 361 480 393.9 480 432l0 16c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-16c0-40.5 25.1-75.1 60.6-89.2L149.3 256 80 256c-44.2 0-80-35.8-80-80L0 80zM144 432l0 16c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-16c0-26.5-21.5-48-48-48l-192 0c-26.5 0-48 21.5-48 48zM406.5 224L304 224c-8.8 0-16-7.2-16-16s7.2-16 16-16l110.5 0 16-64L304 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l134.5 0 12-48L180.2 48l24 288 174.4 0 28-112zM80 48C62.3 48 48 62.3 48 80l0 96c0 17.7 14.3 32 32 32l65.3 0L132 48 80 48zM288 400a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Blender;