
import { Icon } from "../../index";

/**
 * A component that renders the `comment-quote` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-quote?s=sharp-light comment-quote}
 * @preview ![comment-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comment-quote.svg)
 */
const CommentQuote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.9 382l7.2-19.3L79.6 348.2C49.1 317.6 32 279.9 32 240c0-91.3 93.8-176 224-176s224 84.7 224 176s-93.8 176-224 176c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8L68.6 430.8 86.9 382zM16 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L30.1 442.4 16 480zM160 176l48 0 0 16 0 16 0 16-48 0 0-48zm48 80l0 28.9L154.4 305l-15 5.6 11.2 30 15-5.6 64-24 10.4-3.9 0-11.1 0-40 0-32 0-16 0-16 0-16 0-32-32 0-48 0-32 0 0 32 0 48 0 32 32 0 48 0zm176 0l0-32 0-16 0-16 0-16 0-32-32 0-48 0-32 0 0 32 0 48 0 32 32 0 48 0 0 28.9L298.4 305l-15 5.6 11.2 30 15-5.6 64-24 10.4-3.9 0-11.1 0-40zm-32-48l0 16-48 0 0-48 48 0 0 16 0 16z" />
    </Icon>
);

export default CommentQuote;