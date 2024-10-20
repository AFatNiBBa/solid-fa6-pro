
import { Icon } from "../../index";

/**
 * A component that renders the `user-group-crown` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-crown?s=sharp-solid user-group-crown}
 * @preview ![user-group-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-group-crown.svg)
 */
const UserGroupCrown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 0l0 53.7L96 144c0 70.7 57.3 128 128 128s128-57.3 128-128l0-90.3L352 0 304 24l-16 8L224 0 160 32l-16-8L96 0zm48 144l0-16 160 0 0 16c0 44.2-35.8 80-80 80s-80-35.8-80-80zM448 512L384 304 64 304 0 512l448 0zm192 0L576 320l-153.6 0 56.2 182.6 2.9 9.4L640 512zM432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-17.2 0-33.5 3.9-48 10.8l0 10.9 0 90.3c0 31.4-9 60.6-24.6 85.3C379 245.9 404.3 256 432 256z" />
    </Icon>
);

export default UserGroupCrown;