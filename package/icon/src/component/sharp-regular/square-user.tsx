
import { Icon } from "../../index";

/**
 * A component that renders the `square-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=sharp-regular square-user}
 * @preview ![square-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-user.svg)
 */
const SquareUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352-26.7 0L336 320l-224 0L74.7 432 48 432 48 80l352 0zM322.7 432l-197.5 0 21.3-64 154.8 0 21.3 64zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zM224 240a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
    </Icon>
);

export default SquareUser;