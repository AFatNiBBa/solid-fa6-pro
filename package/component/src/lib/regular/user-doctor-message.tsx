
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor-message` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-message?s=regular user-doctor-message}
 * @preview ![user-doctor-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-doctor-message.svg)
 */
const UserDoctorMessage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 128a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm80 128A128 128 0 1 1 224 0a128 128 0 1 1 0 256zm-48 96c-5.4 0-10.8 .3-16 1l0 49.3c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-41c-46.9 19-80 65-80 118.7l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c0-97.2 78.8-176 176-176l96 0c97.2 0 176 78.8 176 176l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c0-53.7-33.1-99.7-80-118.7l0 40.7c27.6 7.1 48 32.2 48 62l0 32c0 8.8-7.2 16-16 16l-24 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l8 0 0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 16 8 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-24 0c-8.8 0-16-7.2-16-16l0-32c0-29.8 20.4-54.9 48-62l0-49c-5.2-.7-10.6-1-16-1l-96 0zm-8 104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM432 0L592 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-48 0-83.2 62.4c-2.4 1.8-5.7 2.1-8.4 .8s-4.4-4.1-4.4-7.2l0-56-16 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default UserDoctorMessage;