
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plug-circle-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-plus?s=duotone plug-circle-plus}
 * @preview ![plug-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plug-circle-plus.svg)
 */
const PlugCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32c0 2.3-.3 4.6-.7 6.8C309.8 220 256 287.7 256 368c0 11.4 1.1 22.5 3.1 33.3c-11.1 5.1-22.9 9-35.1 11.5l0 67.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-67.2C87 398 32 333.4 32 256l0-32c-17.7 0-32-14.3-32-32zM64 32C64 14.3 78.3 0 96 0s32 14.3 32 32l0 96-64 0 0-96zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96-64 0 0-96z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default PlugCirclePlus;