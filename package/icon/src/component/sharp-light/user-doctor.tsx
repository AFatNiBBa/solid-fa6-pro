
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=sharp-light user-doctor}
 * @preview ![user-doctor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-doctor.svg)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm128-96A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM43.3 480l361.3 0L360.4 336 320 336l0 34.3c23.1 6.9 40 28.3 40 53.7l0 24 0 16-16 0-16 0-16 0 0-32 16 0 0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8 16 0 0 32-16 0-16 0-16 0 0-16 0-24c0-25.4 16.9-46.8 40-53.7l0-34.3-112 0 0 34.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-34.7-56.4 0L43.3 480zM160 400a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM64 304l320 0 54.2 176 9.8 32-33.5 0-381 0L0 512l9.8-32L64 304z" />
    </Icon>
);

export default UserDoctor;