
import { Icon } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=solid user-clock}
 * @preview ![user-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-clock.svg)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default UserClock;