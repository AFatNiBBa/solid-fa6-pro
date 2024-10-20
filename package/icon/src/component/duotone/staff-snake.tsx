
import { Icon, generic } from "../../index";

/**
 * A component that renders the `staff-snake` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/staff-snake?s=duotone staff-snake}
 * @preview ![staff-snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/staff-snake.svg)
 */
const StaffSnake: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 104c0 30.9 25.1 56 56 56l16 0c22.3 0 41.6-13.1 50.6-32l41.4 0 56 0 68 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-69 0-2.5 80 71.5 0c53 0 96-43 96-96s-43-96-96-96l-65.5 0-61 0L72 48l-8 0-8 0C25.1 48 0 73.1 0 104zm80-8A16 16 0 1 1 48 96a16 16 0 1 1 32 0zM56 256c0 53 43 96 96 96l19 0 42 0 43 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-44 0-2.1 67.5-.4 12.5 46.5 0c53 0 96-43 96-96s-43-96-96-96l-40.5 0-47 0L152 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l15.5 0L165 160l-13 0c-53 0-96 43-96 96zM96 424c0 22.1 17.9 40 40 40l38.5 0c-.1-4.2-.3-8.3-.4-12.5c-.7-22.5-1.4-45-2.1-67.5l-36 0c-22.1 0-40 17.9-40 40z" />
        <path d="M222.6 43.2L223 32c0-.7 0-1.3 0-1.9c-.5-16.6-14.1-30-31-30s-30.5 13.4-31 30c0 .6 0 1.3 0 1.9l.4 11.2 .1 4.8 61 0 .1-4.8zM215.5 272L220 128l-56 0 4.5 144 47 0zM213 352l-42 0 3.1 99.5 1.4 43.5 0 1c.3 8.9 7.6 16 16.5 16s16.2-7.1 16.5-16l0-1 1.4-43.5L213 352z" />
    </Icon>
);

export default StaffSnake;