
import { Icon } from "../../index";

/**
 * A component that renders the `image-user` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=solid image-user}
 * @preview ![image-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/image-user.svg)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM192 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM144 356.6c0-37.9 30.7-68.6 68.6-68.6l86.9 0c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4l-169.1 0c-15.1 0-27.4-12.3-27.4-27.4z" />
    </Icon>
);

export default ImageUser;