
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-astronaut` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-astronaut?s=duotone user-astronaut}
 * @preview ![user-astronaut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-astronaut.svg)
 */
const UserAstronaut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M112 144c0-26.5 21.5-48 48-48l128 0c26.5 0 48 21.5 48 48l0 16c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-16zm16 304c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64-128 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-32 0 0-64zm8-272c0 3.4 2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3zM256 464a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M224 0c65.7 0 122.1 39.5 146.7 96.1C387.1 97.5 400 111.2 400 128l0 64c0 16.8-12.9 30.5-29.3 31.9C346.1 280.5 289.7 320 224 320s-122.1-39.5-146.7-96.1C60.9 222.5 48 208.8 48 192l0-64c0-16.8 12.9-30.5 29.3-31.9C101.9 39.5 158.3 0 224 0zM336 160l0-16c0-26.5-21.5-48-48-48L160 96c-26.5 0-48 21.5-48 48l0 16c0 53 43 96 96 96l32 0c53 0 96-43 96-96zM112.7 316.5C144.1 338.8 182.5 352 224 352s79.9-13.2 111.3-35.5C401.3 342.6 448 407 448 482.3c0 16.4-13.3 29.7-29.7 29.7L320 512l0-64c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32l0 64-98.3 0C13.3 512 0 498.7 0 482.3C0 407 46.7 342.6 112.7 316.5z" />
    </Icon>
);

export default UserAstronaut;