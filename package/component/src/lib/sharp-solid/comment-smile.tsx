
import { Icon } from "../../index";

/**
 * A component that renders the `comment-smile` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-smile?s=sharp-solid comment-smile}
 * @preview ![comment-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-smile.svg)
 */
const CommentSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM192 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM168.4 254.1l-35.8 32 16 17.9c26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48l16-17.9-35.8-32-16 17.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32l-16-17.9z" />
    </Icon>
);

export default CommentSmile;