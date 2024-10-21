
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blender-phone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender-phone?s=duotone blender-phone}
 * @preview ![blender-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/blender-phone.svg)
 */
const BlenderPhone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M196.2 47.9c0 1.3 .1 2.7 .2 4.1L224 384l256 0 24-96-104 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 16-64-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l136 0 16-64L400 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l160 0 6.1-24.2C571.1 19.6 555.8 0 535 0L244.2 0c-26.7 0-48 21.7-48 47.9z" />
        <path d="M147.5 30.7c10.8 6.7 15.3 21 10.6 33.4l-22 57.8c-4.2 10.9-14.5 17.6-25.3 16.4l-33.3-3.6c-13.6 42.2-13.6 88.4 0 130.7l33.3-3.6c10.9-1.2 21.2 5.5 25.3 16.4l22 57.8c4.7 12.4 .2 26.7-10.6 33.4l-44 27.2c-9.7 6-21.9 4.2-29.8-4.3C-24.6 286-24.6 114 73.7 7.8C81.6-.7 93.8-2.5 103.5 3.5l44 27.2zM560 64l-8 32L400 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l160 0zm-24 96l-8 32-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l136 0zm-24 96l-8 32-104 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0zM208 384l288 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zm144 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default BlenderPhone;