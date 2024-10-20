
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-doctor-message` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-message?s=duotone user-doctor-message}
 * @preview ![user-doctor-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-doctor-message.svg)
 */
const UserDoctorMessage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1C54 332.9 0 401.3 0 482.3zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm24 296a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M384 48c0-26.5 21.5-48 48-48L592 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-48 0-83.2 62.4c-2.4 1.8-5.7 2.1-8.4 .8s-4.4-4.1-4.4-7.2l0-56-16 0c-26.5 0-48-21.5-48-48l0-128z" />
    </Icon>
);

export default UserDoctorMessage;