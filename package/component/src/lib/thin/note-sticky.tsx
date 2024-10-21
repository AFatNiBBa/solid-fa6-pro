
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=thin note-sticky}
 * @preview ![note-sticky](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/note-sticky.svg)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l220.1 0c1.3 0 2.6-.1 3.9-.2l0-95.8c0-26.5 21.5-48 48-48l95.8 0c.2-1.3 .2-2.6 .2-3.9L432 96c0-26.5-21.5-48-48-48L64 48zM304 457.1c1-.8 1.9-1.6 2.7-2.4L422.6 338.7c.9-.9 1.7-1.8 2.4-2.7L336 336c-17.7 0-32 14.3-32 32l0 89.1zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 220.1c0 12.7-5.1 24.9-14.1 33.9L318.1 465.9c-9 9-21.2 14.1-33.9 14.1L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default NoteSticky;