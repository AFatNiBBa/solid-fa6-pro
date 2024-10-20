
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=sharp-thin user-vneck}
 * @preview ![user-vneck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-vneck.svg)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zM211.9 410.4L224 424.6l12.1-14.2L313.6 320l58.5 0 54.2 176L21.7 496 75.8 320l58.5 0 77.5 90.4zM384 304l-77.7 0-71.8 83.7L224 400l-10.5-12.3L141.7 304 64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16L384 304z" />
    </Icon>
);

export default UserVneck;