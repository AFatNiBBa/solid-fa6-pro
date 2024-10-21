
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=regular user-doctor}
 * @preview ![user-doctor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-doctor.svg)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm64 225c5.2-.7 10.6-1 16-1l96 0c5.4 0 10.8 .3 16 1l0 49c-27.6 7.1-48 32.2-48 62l0 32c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-8 0 0-16c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16-8 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-32c0-29.8-20.4-54.9-48-62l0-40.7c46.9 19 80 65 80 118.7l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-53.7 33.1-99.7 80-118.7l0 41c-23.1 6.9-40 28.3-40 53.7c0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7l0-49.3zm-16 79a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default UserDoctor;