
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-image?s=sharp-duotone-solid comment-image}
 * @preview ![comment-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-image.svg)
 */
const CommentImage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm96 48l64-64 35.5 40.6L296 144 416 288l0 32L96 320l0-32zm96-128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M96 288v32H416V288L296 144 195.5 264.6 160 224 96 288z" />
    </Icon>
);

export default CommentImage;