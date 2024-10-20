
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-tie-hair-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie-hair-long?s=sharp-duotone-solid user-tie-hair-long}
 * @preview ![user-tie-hair-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-tie-hair-long.svg)
 */
const UserTieHairLong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 128l0 16c0 53 43 96 96 96s96-43 96-96l0-16c0-11.2-1.9-22-5.5-32L256 96 240 80l-32 32-78.7 0c-.9 5.2-1.3 10.5-1.3 16z" />
        <path d="M320 128c0-11.2-1.9-22-5.5-32L256 96 240 80l-32 32-78.7 0c-.9 5.2-1.3 10.5-1.3 16l0 16c0 53 43 96 96 96s96-43 96-96l0-16zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128l0 16 0 48 48 48 0 32-176 0L48 272l0-32 48-48 0-48 0-16zM280 512l-14.9 0-82.3 0L168 512 0 512 64 320l71.8 0 39.9 163.1 33.4-123.9L176 304l48 0 48 0-33.1 55.2 33.4 123.9L312.2 320l71.8 0 64 192-168 0z" />
    </Icon>
);

export default UserTieHairLong;