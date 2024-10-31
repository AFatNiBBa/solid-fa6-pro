
import { Icon } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=sharp-thin user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 128c0-5.4-.4-10.8-1.1-16L280 112l-4 0-2.4-3.2L255.4 84.5l-33.2 40.6-2.4 2.9-3.8 0-104 0 0 16c0 61.9 50.1 112 112 112s112-50.1 112-112l0-16zm-4.6-32c-6.8-22.8-20.6-42.5-39-56.7L265.8 71.8 284 96l47.4 0zM212.2 112L279 30.4C262.7 21.2 244 16 224 16c-56.4 0-103.1 41.7-110.9 96l99.1 0zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16zM22.2 496l403.6 0L372.5 336 75.5 336 22.2 496zM64 320l320 0 58.7 176 5.3 16-16.9 0L16.9 512 0 512l5.3-16L64 320z" />
    </Icon>
);

export default UserHair;