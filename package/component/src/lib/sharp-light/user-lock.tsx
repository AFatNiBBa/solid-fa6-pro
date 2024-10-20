
import { Icon } from "../../index";

/**
 * A component that renders the `user-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-lock?s=sharp-light user-lock}
 * @preview ![user-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-lock.svg)
 */
const UserLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM43.3 480L87.6 336l272.7 0L384 412.8 384 304 64 304 9.8 480 0 512l33.5 0L384 512l0-32L43.3 480zM528 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default UserLock;