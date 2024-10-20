
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard-user?s=sharp-regular chalkboard-user}
 * @preview ![chalkboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chalkboard-user.svg)
 */
const ChalkboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M592 48L208 48l0 57.3c-14.8-6-31-9.3-48-9.3l0-48 0-48 48 0L592 0l48 0 0 48 0 320 0 48-48 0-48 0-24 0-128 0-24 0-43.4 0-14.4-48 57.8 0 0-72 0-24 24 0 128 0 24 0 0 24 0 72 48 0 0-320zM496 368l0-48-80 0 0 48 80 0zM208 224a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zm.5 240l191 0-19.2-64L83.7 400 64.5 464zM48 352l224 0 33.6 112L320 512l-50.1 0L50.1 512 0 512l14.4-48L48 352z" />
    </Icon>
);

export default ChalkboardUser;