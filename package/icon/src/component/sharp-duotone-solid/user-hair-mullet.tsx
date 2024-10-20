
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-hair-mullet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair-mullet?s=sharp-duotone-solid user-hair-mullet}
 * @preview ![user-hair-mullet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-hair-mullet.svg)
 */
const UserHairMullet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M104 128c0 20.4 4.1 39.6 11.6 56.7c15.9 36.2 47.1 62.6 87.4 69.5c6.8 1.2 13.8 1.8 21 1.8s14.2-.6 21-1.8c40.2-6.9 71.5-33.3 87.4-69.5c7.5-17.1 11.6-36.4 11.6-56.7c0-5.4-.3-10.8-.9-16c-2.4 0-4.8 0-7.1 0c-21.3 0-42.7 0-64 0c-5.3 0-10.7 0-16 0c-10.7-16-21.3-32-32-48c-10.7 16-21.3 32-32 48c-5.3 0-10.7 0-16 0c-21.3 0-42.7 0-64 0c-2.4 0-4.8 0-7.1 0c-.6 5.2-.9 10.6-.9 16z" />
        <path d="M224.4 0c47.2 .1 84.8 25.8 104.6 64L360 64l0 48-24 0-64 0-16 0L224 64l-32 48-16 0-64 0-24 0 0-48 31.1 0C138.8 25.8 176.4 .1 223.6 0l.7 0zM115.6 184.7c15.9 36.2 47.1 62.6 87.4 69.5L176 288l-32 0-8-32-24 16L80 256l35.6-71.3zM245 254.2c40.2-6.9 71.5-33.3 87.4-69.5L368 256l-32 16-24-16-8 32-32 0-27-33.8zM64 320l320 0 64 192L0 512 64 320z" />
    </Icon>
);

export default UserHairMullet;