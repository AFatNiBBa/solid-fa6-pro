
import { Icon } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=thin user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528.1 512l-20.3-16L94.7 496c-8.1 0-14.7-6.6-14.7-14.7C80 401 145 336 225.3 336l79.9 0-20.3-16-59.6 0C136.2 320 64 392.2 64 481.3c0 17 13.8 30.7 30.7 30.7l433.4 0zM456 136C456 60.9 395.1 0 320 0c-51.3 0-95.9 28.4-119.1 70.3l12.8 10.1C233.7 42.1 273.8 16 320 16c66.3 0 120 53.7 120 120c0 36.1-15.9 68.5-41.2 90.5l12.8 10.1C438.9 211.7 456 175.8 456 136zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default UserLargeSlash;