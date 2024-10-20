
import { Icon } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=solid user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128l0 16c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16-160 0zm0-108.8c10.2 7.5 23.8 8.3 34.9 2L209.1 4c4.6-2.6 9.7-4 14.9-4s10.4 1.4 14.9 4l30.2 17.2c11 6.3 24.7 5.5 34.9-2l.1-.1c.3-.2 .6-.4 .8-.6l3-2.4L323.6 3.5c2.8-2.3 6.4-3.5 10-3.5L336 0c8.8 0 16 7.2 16 16l0 23 0 3.2c0 0 0 .1 0 .1L352 144c0 70.7-57.3 128-128 128s-128-57.3-128-128L96 42.3c0 0 0-.1 0-.1L96 39l0-23c0-8.8 7.2-16 16-16l2.4 0c3.6 0 7.2 1.2 10 3.5L140 16l3 2.4c.3 .2 .6 .4 .8 .6l.1 .1zM0 472c0-92.8 75.2-168 168-168l112 0c92.8 0 168 75.2 168 168l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8z" />
    </Icon>
);

export default UserCrown;