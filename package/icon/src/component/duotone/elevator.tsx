
import { Icon, generic } from "../../index";

/**
 * A component that renders the `elevator` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=duotone elevator}
 * @preview ![elevator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/elevator.svg)
 */
const Elevator: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 128c-35.3 0-64 28.7-64 64zM80 400c0-.4 0-.8 0 0zm32-128c0-.4 0-.8 0 0zM272 400c0-.4 0-.8 0 0zm32-128c0-.4 0-.8 0 0z" />
        <path d="M132.7 4.7c6.2-6.2 16.4-6.2 22.6 0l64 64c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9L80 96c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l64-64zm224 86.6l-64-64c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9L432 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-64 64c-6.2 6.2-16.4 6.2-22.6 0zM160 224a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM80 400c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-16zm192 0c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-16zm32-128a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Elevator;