
import { Icon } from "../../index";

/**
 * A component that renders the `square-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=light square-user}
 * @preview ![square-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-user.svg)
 */
const SquareUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32c0-70.7-57.3-128-128-128l-64 0c-70.7 0-128 57.3-128 128c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM352 448L96 448c0-53 43-96 96-96l64 0c53 0 96 43 96 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 256a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm-80-48a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
    </Icon>
);

export default SquareUser;