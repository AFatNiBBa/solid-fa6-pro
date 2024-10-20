
import { Icon } from "../../index";

/**
 * A component that renders the `user-injured` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=sharp-light user-injured}
 * @preview ![user-injured](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-injured.svg)
 */
const UserInjured: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 128c0-5.5-.5-10.8-1.3-16L192 112l-62.7 0c-.9 5.2-1.3 10.5-1.3 16c0 53 43 96 96 96s96-43 96-96zM186.4 80l57.4-46c-6.4-1.3-13-2-19.8-2c-35.5 0-66.6 19.3-83.2 48l45.5 0zm51.2 0l69.5 0c-7.4-12.7-17.6-23.6-29.8-31.8L237.6 80zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM80 360.8L43.3 480 80 480l0-119.2zM112 480l114.9 0L135.2 336 112 336l0 144zm91.7-96L336 384l16 0 0 16 0 80 52.7 0L360.4 336l-187.2 0 30.5 48zm20.4 32l40.7 64 55.2 0 0-64-95.9 0zM160 512l-64 0-62.5 0L0 512l9.8-32L64 304l320 0 54.2 176 9.8 32-33.5 0L352 512l-16 0-160 0-16 0z" />
    </Icon>
);

export default UserInjured;