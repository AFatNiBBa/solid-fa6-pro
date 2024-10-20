
import { Icon } from "../../index";

/**
 * A component that renders the `user-robot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-robot?s=solid user-robot}
 * @preview ![user-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-robot.svg)
 */
const UserRobot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c8.8 0 16 7.2 16 16l0 48 64 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-160 0c-35.3 0-64-28.7-64-64l0-128c0-35.3 28.7-64 64-64l64 0 0-48c0-8.8 7.2-16 16-16zM16 144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96zm400-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zM160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM160 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm48 16a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm80-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM96 352l256 0c53 0 96 43 96 96l0 32c0 17.7-14.3 32-32 32l-64 0 0-64c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32l0 64-64 0c-17.7 0-32-14.3-32-32l0-32c0-53 43-96 96-96zm80 112l0 48-32 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16zm48-16c8.8 0 16 7.2 16 16l0 48-32 0 0-48c0-8.8 7.2-16 16-16zm80 16l0 48-32 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default UserRobot;