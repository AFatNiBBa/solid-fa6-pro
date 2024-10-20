
import { Icon } from "../../index";

/**
 * A component that renders the `user-robot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-robot?s=regular user-robot}
 * @preview ![user-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-robot.svg)
 */
const UserRobot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-64 0c-44.2 0-80 35.8-80 80l0 96c0 44.2 35.8 80 80 80l160 0c44.2 0 80-35.8 80-80l0-96c0-44.2-35.8-80-80-80l-64 0 0-48zm96 128l0 96c0 17.7-14.3 32-32 32l0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16-32 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16-32 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32zm64 304l0 16-96 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-32 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-32 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-96 0 0-16c0-26.5 21.5-48 48-48l256 0c26.5 0 48 21.5 48 48zM160 512l64 0 64 0 112 0c26.5 0 48-21.5 48-48l0-16c0-53-43-96-96-96L96 352c-53 0-96 43-96 96l0 16c0 26.5 21.5 48 48 48l112 0zM16 128c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zm432 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zM208 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default UserRobot;