
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-vneck-hair-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck-hair-long?s=duotone user-vneck-hair-long}
 * @preview ![user-vneck-hair-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-vneck-hair-long.svg)
 */
const UserVneckHairLong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 112c0 10.7 0 21.3 0 32c0 53 43 96 96 96s96-43 96-96l0-16 0-32c-2.7 0-5.3 0-8 0c-22.8 0-42.8-11.9-54.1-29.8C241 93.7 210.6 112 176 112c-16 0-32 0-48 0z" />
        <path d="M176 112l-48 0s0 0 0 0l0 32c0 53 43 96 96 96s96-43 96-96l0-16s0 0 0 0l0-32-8 0c-22.8 0-42.8-11.9-54.1-29.8C241 93.7 210.6 112 176 112zm48 160L70.6 272C58.1 272 48 261.9 48 249.4c0-6 2.4-11.8 6.6-16l3.9-3.9c24-24 37.5-56.6 37.5-90.5l0-11s0 0 0 0C96 57.3 153.3 0 224 0c70.6 0 127.8 57.1 128 127.6l0 .8 0 .2 0 10.3c0 33.9 13.5 66.5 37.5 90.5l3.9 3.9c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L224 272zm-78.1 42.9L210.7 412c6.3 9.5 20.3 9.5 26.6 0l64.8-97.1c3.5-5.2 9.8-8 15.9-6.6c74.5 17.2 130 84 130 163.7l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8c0-79.7 55.5-146.5 130-163.7c6.1-1.4 12.4 1.4 15.9 6.6z" />
    </Icon>
);

export default UserVneckHairLong;