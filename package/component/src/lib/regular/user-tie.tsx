
import { Icon } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=regular user-tie}
 * @preview ![user-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-tie.svg)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm128-80A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2l19.7 0 19.7 0c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 15.9 59.2 43.8-87.6c3-6 9.4-9.5 15.9-8.4C390.4 335.6 448 401.7 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-79.6 57.6-145.7 133.5-158.9c6.6-1.1 12.9 2.4 15.9 8.4l43.8 87.6 15.9-59.2zm-90.6 17.1C82.3 391.1 55.4 424.2 49.3 464l113 0-43.8-87.7zM285.7 464l113 0c-6.1-39.8-33-72.9-69.2-87.7L285.7 464z" />
    </Icon>
);

export default UserTie;