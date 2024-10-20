
import { Icon } from "../../index";

/**
 * A component that renders the `comment-middle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=light comment-middle}
 * @preview ![comment-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/comment-middle.svg)
 */
const CommentMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216.9 394.3L256 472.4l39.1-78.1c4.3-8.6 12.3-14.8 21.7-16.9C415.4 355.5 480 284.4 480 208c0-91.3-93.8-176-224-176S32 116.7 32 208c0 76.4 64.6 147.5 163.3 169.4c9.4 2.1 17.4 8.3 21.7 16.9zm44.5 89s0 0 0 0l-5.5 2.7 5.5-2.7s0 0 0 0zm62.2-74.7l-44.5 89c-4.4 8.8-13.3 14.3-23.2 14.3s-18.8-5.5-23.2-14.3l-44.5-89C79.8 384.5 0 303.8 0 208C0 93.1 114.6 0 256 0S512 93.1 512 208c0 95.8-79.8 176.5-188.3 200.7z" />
    </Icon>
);

export default CommentMiddle;