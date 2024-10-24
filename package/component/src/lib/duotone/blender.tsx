
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blender` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=duotone blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 192c0 35.3 28.7 64 64 64l85.3 0L160 384l256 0 24-96-104 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 16-64-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l136 0 16-64L336 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l160 0 6.1-24.2c.7-2.6 1-5.3 1-7.8C503 14.8 489.1 0 471 0L160 0 128 0 64 0C28.7 0 0 28.7 0 64zm64 0l69.3 0L144 192l-80 0L64 64z" />
        <path d="M336 64l160 0-8 32L336 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l136 0-8 32-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l112 0-8 32-104 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 432c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-32zm224 16a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Blender;