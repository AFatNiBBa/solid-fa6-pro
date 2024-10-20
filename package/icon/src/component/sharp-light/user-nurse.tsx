
import { Icon } from "../../index";

/**
 * A component that renders the `user-nurse` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse?s=sharp-light user-nurse}
 * @preview ![user-nurse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-nurse.svg)
 */
const UserNurse: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128l0-57.8 96-36 96 36 0 57.8 0 16-192 0 0-16zM96 160l0 16c0 70.7 57.3 128 128 128s128-57.3 128-128l0-16 0-32 0-80L224 0 96 48l0 80 0 32zm224 16c0 53-43 96-96 96s-96-43-96-96l192 0zM200.7 445.9L224 470.7l23.3-24.8L335.7 352l25.2 0 42.7 128L44.4 480 87.1 352l25.2 0 88.4 93.9zM384 320l-62.1 0L246 400.7 224 424l-22-23.3L126.1 320 64 320 10.7 480 0 512l33.7 0 380.5 0 33.7 0-10.7-32L384 320zM208 48l0 24-24 0 0 32 24 0 0 24 32 0 0-24 24 0 0-32-24 0 0-24-32 0z" />
    </Icon>
);

export default UserNurse;