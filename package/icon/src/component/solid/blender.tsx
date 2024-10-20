
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=solid blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0l64 0 32 0L470.1 0c21.1 0 36.4 20.1 30.9 40.4L494.5 64 336 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l149.8 0-17.5 64L336 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l123.6 0-17.5 64L336 256c-8.8 0-16 7.2-16 16s7.2 16 16 16l97.5 0L416 352l-256 0-8.7-96L64 256c-35.3 0-64-28.7-64-64L0 64zM145.5 192L133.8 64 64 64l0 128 81.5 0zM144 384l288 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zm144 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Blender;