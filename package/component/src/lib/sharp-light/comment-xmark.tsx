
import { Icon } from "../../index";

/**
 * A component that renders the `comment-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-xmark?s=sharp-light comment-xmark}
 * @preview ![comment-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comment-xmark.svg)
 */
const CommentXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.9 382l7.2-19.3L79.6 348.2C49.1 317.6 32 279.9 32 240c0-91.3 93.8-176 224-176s224 84.7 224 176s-93.8 176-224 176c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8L68.6 430.8 86.9 382zM16 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L30.1 442.4 16 480zM191.4 152.8l-22.6 22.6 11.3 11.3L233.4 240l-53.3 53.3-11.3 11.3 22.6 22.6 11.3-11.3L256 262.6l53.3 53.3 11.3 11.3 22.6-22.6-11.3-11.3L278.6 240l53.3-53.3 11.3-11.3-22.6-22.6-11.3 11.3L256 217.4l-53.3-53.3-11.3-11.3z" />
    </Icon>
);

export default CommentXmark;