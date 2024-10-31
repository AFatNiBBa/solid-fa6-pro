
import { Icon } from "../../index";

/**
 * A component that renders the `user-alien` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-alien?s=solid user-alien}
 * @preview ![user-alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-alien.svg)
 */
const UserAlien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 167C64 74.8 135.6 0 224 0s160 74.8 160 167c0 101-106.6 185-139.2 208.3c-6.1 4.3-13.4 6.5-20.8 6.5s-14.7-2.1-20.8-6.5C170.6 352 64 268.1 64 167zm244.6 9c-37.9 0-68.6 30.7-68.6 68.6c0 6.3 5.1 11.4 11.4 11.4l16 0c37.9 0 68.6-30.7 68.6-68.6c0-6.3-5.1-11.4-11.4-11.4l-16 0zM208 244.6c0-37.9-30.7-68.6-68.6-68.6l-16 0c-6.3 0-11.4 5.1-11.4 11.4c0 37.9 30.7 68.6 68.6 68.6l16 0c6.3 0 11.4-5.1 11.4-11.4zM0 486.4C0 415 55.7 356.6 126.1 352.3c23.8 23.2 46.1 40.2 58.5 49.1c12 8.6 25.9 12.4 39.4 12.4s27.4-3.8 39.4-12.4c12.4-8.8 34.7-25.8 58.5-49.1C392.3 356.6 448 415 448 486.4c0 14.1-11.5 25.6-25.6 25.6L25.6 512C11.5 512 0 500.5 0 486.4z" />
    </Icon>
);

export default UserAlien;