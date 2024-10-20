
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-hoodie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hoodie?s=sharp-duotone-solid user-hoodie}
 * @preview ![user-hoodie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-hoodie.svg)
 */
const UserHoodie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 157.3C128 232 224 288 224 288s96-56 96-130.7c0-51.5-43-93.3-96-93.3s-96 41.8-96 93.3z" />
        <path d="M327.3 282.2C362 252.9 384 209 384 160C384 71.6 312.4 0 224 0S64 71.6 64 160c0 49 22 92.9 56.7 122.2L118 304l-54 0L0 512l448 0L384 304l-54 0-2.7-21.8zM160 384l0 16 0 64 0 16-32 0 0-16 0-64 0-16 32 0zm160 0l0 16 0 64 0 16-32 0 0-16 0-64 0-16 32 0zM128 157.3c0-51.5 43-93.3 96-93.3s96 41.8 96 93.3C320 232 224 288 224 288s-96-56-96-130.7z" />
    </Icon>
);

export default UserHoodie;