
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-hair-buns` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair-buns?s=sharp-duotone-solid user-hair-buns}
 * @preview ![user-hair-buns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-hair-buns.svg)
 */
const UserHairBuns: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 112l0 64c0 5.5 .5 10.8 1.3 16c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80c.9-5.2 1.3-10.5 1.3-16l0-64-64 0L224 80l-32 32-64 0z" />
        <path d="M128 176l0-64 64 0 32-32 32 32 64 0 0 64c0 5.5-.5 10.8-1.3 16l81.3 0 0-128-65.1 0C312.7 25.7 271.4 0 224 0s-88.7 25.7-110.9 64L48 64l0 128 81.3 0c-.9-5.2-1.3-10.5-1.3-16zM448 512L384 320 64 320 0 512l448 0z" />
    </Icon>
);

export default UserHairBuns;