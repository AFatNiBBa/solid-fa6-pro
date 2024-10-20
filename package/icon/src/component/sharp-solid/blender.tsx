
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=sharp-solid blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L32 0l96 0 32 0L512 0 494.5 64 336 64l-16 0 0 32 16 0 149.8 0-17.5 64L336 160l-16 0 0 32 16 0 123.6 0-17.5 64L336 256l-16 0 0 32 16 0 97.5 0L416 352l-256 0-8.7-96L32 256 0 256l0-32L0 32 0 0zM145.5 192L133.8 64 64 64l0 128 81.5 0zM480 384l0 128L96 512l0-128 384 0zM288 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Blender;