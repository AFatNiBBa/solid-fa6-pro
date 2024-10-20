
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=duotone image-user}
 * @preview ![image-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/image-user.svg)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM144 356.6c0-37.9 30.7-68.6 68.6-68.6l86.9 0c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4l-169.1 0c-15.1 0-27.4-12.3-27.4-27.4zM320 192a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M256 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-43.4 32c-37.9 0-68.6 30.7-68.6 68.6c0 15.1 12.3 27.4 27.4 27.4l169.1 0c15.1 0 27.4-12.3 27.4-27.4c0-37.9-30.7-68.6-68.6-68.6l-86.9 0z" />
    </Icon>
);

export default ImageUser;