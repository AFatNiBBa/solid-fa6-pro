
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-hair-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair-long?s=sharp-duotone-solid user-hair-long}
 * @preview ![user-hair-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-hair-long.svg)
 */
const UserHairLong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 128l0 16c0 53 43 96 96 96s96-43 96-96l0-16c0-11.2-1.9-22-5.5-32L256 96 240 80l-32 32-78.7 0c-.9 5.2-1.3 10.5-1.3 16z" />
        <path d="M320 144c0 53-43 96-96 96s-96-43-96-96l0-16c0-5.5 .5-10.8 1.3-16l78.7 0 32-32 16 16 58.5 0c3.5 10 5.5 20.8 5.5 32l0 16zM224 0C153.3 0 96 57.3 96 128l0 16 0 48L48 240l0 32 176 0 176 0 0-32-48-48 0-48 0-16C352 57.3 294.7 0 224 0zM448 512L384 320 64 320 0 512l448 0z" />
    </Icon>
);

export default UserHairLong;