
import { Icon } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=solid user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 128l0 16c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-16c0-5.5 .6-10.8 1.6-16l30.4 0c29.8 0 55.9-16.3 69.6-40.5C257.3 86.4 275.5 96 296 96l1.3 0c4.3 9.8 6.7 20.6 6.7 32zM96 128l0 16c0 70.7 57.3 128 128 128s128-57.3 128-128l0-16C352 57.3 294.7 0 224 0S96 57.3 96 128zm65.3 192C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7l386.6 0c17 0 30.7-13.8 30.7-30.7C448 392.2 375.8 320 286.7 320l-125.4 0z" />
    </Icon>
);

export default UserHair;