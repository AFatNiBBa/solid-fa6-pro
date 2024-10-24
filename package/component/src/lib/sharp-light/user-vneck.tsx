
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=sharp-light user-vneck}
 * @preview ![user-vneck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-vneck.svg)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zM199.7 420.8L224 449.2l24.3-28.3L321 336l39.4 0 44.3 144L43.3 480 87.6 336l39.4 0 72.7 84.8zM384 304l-77.7 0-61.2 71.4L224 400l-21.1-24.6L141.7 304 64 304 9.8 480 0 512l33.5 0 381 0 33.5 0-9.8-32L384 304z" />
    </Icon>
);

export default UserVneck;