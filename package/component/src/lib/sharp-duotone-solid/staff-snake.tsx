
import { Icon, generic } from "../../index";

/**
 * A component that renders the `staff-snake` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/staff-snake?s=sharp-duotone-solid staff-snake}
 * @preview ![staff-snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/staff-snake.svg)
 */
const StaffSnake: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64 86 0c19.8 0 36.3-13.6 40.8-32l37.2 0 56 0 68 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-69 0-2.5 80 71.5 0c53 0 96-43 96-96s-43-96-96-96l-65.5 0-61 0L64 48c-2 .1-4 0-6 0L48 48C21.5 48 0 69.5 0 96zm80 0A16 16 0 1 1 48 96a16 16 0 1 1 32 0zM56 256c0 53 43 96 96 96l19 0 42 0 43 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-44 0-2.1 67.5-.4 12.5 46.5 0c53 0 96-43 96-96s-43-96-96-96l-40.5 0-47 0L152 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l15.5 0L165 160l-13 0c-53 0-96 43-96 96zM96 384l0 80 40 0 38.5 0c-.1-4.2-.3-8.3-.4-12.5c-.7-22.5-1.4-45-2.1-67.5l-36 0-40 0z" />
        <path d="M208 511l0 1-32 0 0-1-5-159 42 0-5 159zm7.5-239l-47 0L164 128l56 0-4.5 144zM160 0l64 0-1.5 48-61 0L160 0z" />
    </Icon>
);

export default StaffSnake;