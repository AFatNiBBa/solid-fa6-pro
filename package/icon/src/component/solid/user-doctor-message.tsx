
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor-message` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-message?s=solid user-doctor-message}
 * @preview ![user-doctor-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-doctor-message.svg)
 */
const UserDoctorMessage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3c0-81 54-149.4 128-171.1l0 59.1c-23.1 6.9-40 28.3-40 53.7c0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7l0-65.4c6-.6 12.1-.9 18.3-.9l91.4 0c6.2 0 12.3 .3 18.3 .9l0 57.1c-27.6 7.1-48 32.2-48 62l0 40c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l0-24c0-17.7 14.3-32 32-32s32 14.3 32 32l0 24c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-40c0-29.8-20.4-54.9-48-62l0-50.8c74 21.7 128 90.1 128 171.1c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM120 424a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM432 0L592 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-48 0-83.2 62.4c-2.4 1.8-5.7 2.1-8.4 .8s-4.4-4.1-4.4-7.2l0-56-16 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default UserDoctorMessage;