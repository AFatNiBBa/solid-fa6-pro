
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-hair-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair-long?s=duotone user-hair-long}
 * @preview ![user-hair-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-hair-long.svg)
 */
const UserHairLong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 112l0 48c0 53 43 96 96 96s96-43 96-96l0-32 0-32-8 0c-22.8 0-42.8-11.9-54.1-29.8C241 93.7 210.6 112 176 112l-48 0z" />
        <path d="M176 112l-48 0s0 0 0 0l0 48c0 53 43 96 96 96s96-43 96-96l0-32s0 0 0 0l0-32-8 0c-22.8 0-42.8-11.9-54.1-29.8C241 93.7 210.6 112 176 112zm48 160L70.6 272C58.1 272 48 261.9 48 249.4c0-6 2.4-11.8 6.6-16l3.9-3.9c24-24 37.5-56.6 37.5-90.5l0-11s0 0 0 0C96 57.3 153.3 0 224 0c70.6 0 127.8 57.1 128 127.6l0 .8 0 .2 0 10.3c0 33.9 13.5 66.5 37.5 90.5l3.9 3.9c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L224 272zm-62.7 48l125.4 0C375.8 320 448 392.2 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3C0 392.2 72.2 320 161.3 320z" />
    </Icon>
);

export default UserHairLong;