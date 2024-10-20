
import { Icon } from "../../index";

/**
 * A component that renders the `user-injured` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=sharp-thin user-injured}
 * @preview ![user-injured](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-injured.svg)
 */
const UserInjured: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 128c0-8.2-.9-16.3-2.6-24L192 104l-77.4 0c-1.7 7.7-2.6 15.8-2.6 24c0 61.9 50.1 112 112 112s112-50.1 112-112zM188.7 88L256 20.6c-10.2-3-20.9-4.6-32-4.6c-47.8 0-88.5 29.9-104.6 72l69.3 0zm140 0c-10.3-26.8-30.6-48.7-56.3-61l-61 61 117.3 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM21.7 496L80 496l0-176-4.2 0L21.7 496zM96 496l72 0 16 0 43.7 0 21.5 0L134.4 320 96 320l0 176zm172.3 0l67.7 0 0-80-119.8 0 52.2 80zm-62.6-96L344 400l8 0 0 8 0 88 74.3 0L372.2 320l-218.6 0 52.2 80zM168 512L16.7 512 0 512l4.9-16L64 304l320 0 59.1 192 4.9 16-16.7 0L352 512l-8 0-168 0-8 0z" />
    </Icon>
);

export default UserInjured;