
import { Icon } from "../../index";

/**
 * A component that renders the `comment-smile` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-smile?s=sharp-regular comment-smile}
 * @preview ![comment-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/comment-smile.svg)
 */
const CommentSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M101.9 387.7l10.8-28.9L90.9 336.9C63 308.9 48 275.1 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-26.8 0-52.3-3.9-75.7-11l-13.9-4.2-13.9 4.2L94.9 406.2l7-18.5zM16 480l57.8-17.3 92.6-27.8c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L37.2 423.5 16 480zM192 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM168.4 254.1l-35.8 32 16 17.9c26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48l16-17.9-35.8-32-16 17.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32l-16-17.9z" />
    </Icon>
);

export default CommentSmile;