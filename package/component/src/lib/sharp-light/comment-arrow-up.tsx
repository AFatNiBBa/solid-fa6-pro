
import { Icon } from "../../index";

/**
 * A component that renders the `comment-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up?s=sharp-light comment-arrow-up}
 * @preview ![comment-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comment-arrow-up.svg)
 */
const CommentArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.9 382l7.2-19.3L79.6 348.2C49.1 317.6 32 279.9 32 240c0-91.3 93.8-176 224-176s224 84.7 224 176s-93.8 176-224 176c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8L68.6 430.8 86.9 382zM16 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L30.1 442.4 16 480zM272 320l0-137.4 52.7 52.7L336 246.6 358.6 224l-11.3-11.3-80-80L256 121.4l-11.3 11.3-80 80L153.4 224 176 246.6l11.3-11.3L240 182.6 240 320l0 16 32 0 0-16z" />
    </Icon>
);

export default CommentArrowUp;