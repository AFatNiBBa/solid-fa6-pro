
import { Icon } from "../../index";

/**
 * A component that renders the `user-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=sharp-regular user-check}
 * @preview ![user-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-check.svg)
 */
const UserCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 208A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM99.5 352l249.1 0L383 464 65 464 99.5 352zM384 304L64 304 14.8 464 0 512l50.2 0 347.6 0 50.2 0-14.8-48L384 304zM617 177l17-17L600 126.1l-17 17-111 111-47-47-17-17L374.1 224l17 17 64 64 17 17 17-17L617 177z" />
    </Icon>
);

export default UserCheck;