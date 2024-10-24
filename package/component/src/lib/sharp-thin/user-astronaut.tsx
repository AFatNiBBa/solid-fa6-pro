
import { Icon } from "../../index";

/**
 * A component that renders the `user-astronaut` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-astronaut?s=sharp-thin user-astronaut}
 * @preview ![user-astronaut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-astronaut.svg)
 */
const UserAstronaut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 336A176 176 0 1 0 224 0a176 176 0 1 0 0 352zM184 144l-16 0 0 8 0 16-16 0-8 0 0 16 8 0 16 0 0 16 0 8 16 0 0-8 0-16 16 0 8 0 0-16-8 0-16 0 0-16 0-8zM16 112l0 128 16 0 0-128-16 0zm400 0l0 128 16 0 0-128-16 0zM60 304l-12 0L3.7 496 0 512l16.4 0 415.2 0 16.4 0-3.7-16L400 304l-12 0c-4.4 5.6-9 10.9-13.9 16l13.2 0 40.6 176L352 496l0-80 0-8-8 0-240 0-8 0 0 8 0 80-75.9 0L60.7 320l13.2 0c-4.9-5.1-9.5-10.4-13.9-16zm52 192l0-72 224 0 0 72-56 0 0-32 0-8-16 0 0 8 0 32-80 0 0-32 0-8-16 0 0 8 0 32-56 0zM240 272l-32 0c-53 0-96-43-96-96l0-25.4L150.6 112l146.7 0L336 150.6l0 25.4c0 53-43 96-96 96zM144 96L96 144l0 32c0 61.9 50.1 112 112 112l32 0c61.9 0 112-50.1 112-112l0-32L304 96 144 96z" />
    </Icon>
);

export default UserAstronaut;