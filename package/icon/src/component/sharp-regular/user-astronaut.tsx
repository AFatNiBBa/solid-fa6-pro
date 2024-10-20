
import { Icon } from "../../index";

/**
 * A component that renders the `user-astronaut` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-astronaut?s=sharp-regular user-astronaut}
 * @preview ![user-astronaut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-astronaut.svg)
 */
const UserAstronaut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 192a144 144 0 1 1 288 0A144 144 0 1 1 80 192zm325.1-64C378.7 53.4 307.6 0 224 0S69.3 53.4 42.9 128L16 128l0 128 26.9 0C49 273.3 57.5 289.4 68 304l-20 0L11.1 464 0 512l49.3 0 62.7 0 48 0 0-48 0-16 32 0 0 16 0 48 144 0 62.7 0 49.3 0-11.1-48L400 304l-20 0c10.5-14.6 19-30.7 25.1-48l26.9 0 0-128-26.9 0zM336 416l-224 0 0 48-51.7 0L86.2 352l31.6 0c30.4 20.2 66.9 32 106.2 32s75.8-11.8 106.2-32l31.6 0 25.8 112L336 464l0-48zM240 288c53 0 96-43 96-96l0-32-32-32-160 0-32 32 0 32c0 53 43 96 96 96l32 0zM192 160l16 32 32 16-32 16-16 32-16-32-32-16 32-16 16-32zm64 304a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default UserAstronaut;