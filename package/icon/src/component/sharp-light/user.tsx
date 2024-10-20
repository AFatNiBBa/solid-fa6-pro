
import { Icon } from "../../index";

/**
 * A component that renders the `user` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user?s=sharp-light user}
 * @preview ![user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user.svg)
 */
const User: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM43.3 480l361.3 0L360.4 336 87.6 336 43.3 480zM64 304l320 0 54.2 176 9.8 32-33.5 0-381 0L0 512l9.8-32L64 304z" />
    </Icon>
);

export default User;