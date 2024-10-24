
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=sharp-regular user-doctor}
 * @preview ![user-doctor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-doctor.svg)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm128-80A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM99.5 352L50.2 512 0 512 64 304l320 0 64 208-50.2 0L348.5 352 312 352l0 50c27.6 7.1 48 32.2 48 62l0 32 0 16-16 0-24 0-16 0 0-32 16 0 8 0 0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 16 8 0 16 0 0 32-16 0-24 0-16 0 0-16 0-32c0-29.8 20.4-54.9 48-62l0-50-112 0 0 50.3c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-50.3-36.5 0zM176 456a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default UserDoctor;