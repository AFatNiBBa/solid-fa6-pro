
import { Icon } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=regular user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128l160 0 0 16c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-16zm0-108.8l-.1-.1c-.3-.2-.6-.4-.8-.6L140 16 124.4 3.5C121.5 1.2 118 0 114.4 0L112 0c-8.8 0-16 7.2-16 16l0 23 0 3.2c0 0 0 .1 0 .1L96 144c0 70.7 57.3 128 128 128s128-57.3 128-128l0-101.7c0 0 0-.1 0-.1l0-3.2 0-23c0-8.8-7.2-16-16-16l-2.4 0c-3.6 0-7.2 1.2-10 3.5L308 16l-3 2.4c-.3 .2-.6 .4-.8 .6l-.1 .1c-10.2 7.5-23.8 8.3-34.9 2L238.9 4c-4.6-2.6-9.7-4-14.9-4s-10.4 1.4-14.9 4L178.9 21.2c-11 6.3-24.7 5.5-34.9-2zM168 352l112 0c63.6 0 115.6 49.5 119.7 112L48.3 464c4.1-62.5 56.2-112 119.7-112zm0-48C75.2 304 0 379.2 0 472l0 8c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-8c0-92.8-75.2-168-168-168l-112 0z" />
    </Icon>
);

export default UserCrown;