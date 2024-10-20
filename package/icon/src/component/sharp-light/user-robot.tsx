
import { Icon } from "../../index";

/**
 * A component that renders the `user-robot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-robot?s=sharp-light user-robot}
 * @preview ![user-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-robot.svg)
 */
const UserRobot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 16l0-16L208 0l0 16 0 48L96 64 64 64l0 32 0 192 0 32 32 0 256 0 32 0 0-32 0-192 0-32-32 0L240 64l0-48zM96 96l256 0 0 192-48 0 0-48-32 0 0 48-32 0 0-48-32 0 0 48-32 0 0-48-32 0 0 48-48 0L96 96zM32 128L0 128 0 256l32 0 0-128zm416 0l-32 0 0 128 32 0 0-128zM160 176a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-48-16a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm192 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-16-48a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM272 448l0 32-32 0 0-32 32 0zm32 32l0-32 32 0 0 32-32 0zm64 0l0-32 0-32-32 0-48 0-64 0-112 0-32 0 0 32 0 32-37 0 28.8-96 304.4 0L405 480l-37 0zm-256 0l0-32 32 0 0 32-32 0zm64 0l0-32 32 0 0 32-32 0zM80 512l32 0 48 0 64 0 64 0 48 0 32 0 46.6 0 33.4 0-9.6-32L400 352 48 352 9.6 480 0 512l33.4 0L80 512z" />
    </Icon>
);

export default UserRobot;