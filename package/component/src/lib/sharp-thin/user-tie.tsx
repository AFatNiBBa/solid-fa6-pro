
import { Icon } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=sharp-thin user-tie}
 * @preview ![user-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-tie.svg)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM168.5 304l15.5 0 80 0 15.5 0-9 12.6-37.2 52.1 23.2 46.3L304 320l80 0 58.7 176 5.3 16-16.9 0-205.2 0-3.8 0L16.9 512 0 512l5.3-16L64 320l80 0 47.5 95.1 23.2-46.3-37.2-52.1-9-12.6zm80 16l-48.9 0 23.2 32.5 1.2-2.4 1.2 2.4L248.5 320zM209.7 487.2L134.1 336l-58.6 0L22.2 496l191.9 0-4.4-8.8zm-9.2-54.2l14.6 29.2L224 480l8.9-17.9 14.6-29.2L224 385.9l-23.5 47.1zM233.9 496l191.9 0L372.5 336l-58.6 0L238.3 487.2l-4.4 8.8z" />
    </Icon>
);

export default UserTie;