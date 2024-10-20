
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=duotone user-doctor}
 * @preview ![user-doctor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-doctor.svg)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
        <path d="M280 304c2.7 0 5.3 .1 8 .2l0 57.8c-27.6 7.1-48 32.2-48 62l0 40c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l0-24c0-17.7 14.3-32 32-32s32 14.3 32 32l0 24c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-40c0-29.8-20.4-54.9-48-62l0-53.2C393.5 326.7 448 393 448 472l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8c0-79 54.5-145.3 128-163.2l0 61.5c-23.1 6.9-40 28.3-40 53.7c0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7l0-66.1c2.7-.1 5.3-.2 8-.2l112 0zM144 400a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default UserDoctor;