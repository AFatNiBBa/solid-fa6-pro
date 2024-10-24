
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-vneck-hair-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck-hair-long?s=sharp-duotone-solid user-vneck-hair-long}
 * @preview ![user-vneck-hair-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-vneck-hair-long.svg)
 */
const UserVneckHairLong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 128l0 16c0 53 43 96 96 96s96-43 96-96l0-16c0-11.2-1.9-22-5.5-32L256 96 240 80l-32 32-78.7 0c-.9 5.2-1.3 10.5-1.3 16z" />
        <path d="M320 144c0 53-43 96-96 96s-96-43-96-96l0-16c0-5.5 .5-10.8 1.3-16l78.7 0 32-32 16 16 58.5 0c3.5 10 5.5 20.8 5.5 32l0 16zM224 0C153.3 0 96 57.3 96 128l0 16 0 48L48 240l0 32 176 0 176 0 0-32-48-48 0-48 0-16C352 57.3 294.7 0 224 0zm0 416l-72-96-88 0L0 512l448 0L384 320l-88 0-72 96z" />
    </Icon>
);

export default UserVneckHairLong;