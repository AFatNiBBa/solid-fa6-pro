
import { Icon } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=sharp-thin user-shield}
 * @preview ![user-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-shield.svg)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM75.8 320l245.3 0c-.5-5.4-.8-10.7-1-16L64 304 4.9 496 0 512l16.7 0 409.4 0c-7-5-13.7-10.3-19.9-16L21.7 496 75.8 320zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM624 290.7l0 5.3c0 76.9-40.9 162.4-120 195.9l0-247.6 120 46.5zm-256 0l120-46.5 0 247.6c-79.1-33.5-120-119-120-195.9l0-5.3zM496 512c96-32 144-130.2 144-216l0-16.2L496 224 352 279.8l0 16.2c0 85.8 48 184 144 216z" />
    </Icon>
);

export default UserShield;