
import { Icon } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=sharp-thin user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528.1 512l-20.3-16L88 496l66.7-160 150.5 0-20.3-16L144 320 70.7 496 64 512l17.3 0 446.7 0zM464 144C464 64.5 399.5 0 320 0c-51.5 0-96.8 27.1-122.2 67.8l12.6 10C232.9 40.7 273.5 16 320 16c70.7 0 128 57.3 128 128c0 35.7-14.6 68-38.2 91.2l12.6 10c25.7-26 41.5-61.7 41.5-101.2zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default UserLargeSlash;