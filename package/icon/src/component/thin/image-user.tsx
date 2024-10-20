
import { Icon } from "../../index";

/**
 * A component that renders the `image-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=thin image-user}
 * @preview ![image-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/image-user.svg)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm304 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM160 356.6c0 6.3 5.1 11.4 11.4 11.4l169.1 0c6.3 0 11.4-5.1 11.4-11.4c0-29-23.5-52.6-52.6-52.6l-86.9 0c-29 0-52.6 23.5-52.6 52.6zM256 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM212.6 288l86.9 0c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4l-169.1 0c-15.1 0-27.4-12.3-27.4-27.4c0-37.9 30.7-68.6 68.6-68.6z" />
    </Icon>
);

export default ImageUser;