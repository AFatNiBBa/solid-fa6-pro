
import { Icon } from "../../index";

/**
 * A component that renders the `note` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=thin note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 220.1c0 1.3-.1 2.6-.2 3.9L336 320c-26.5 0-48 21.5-48 48l0 95.8c-1.3 .2-2.6 .2-3.9 .2L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM306.7 454.6c-.9 .9-1.8 1.7-2.7 2.4l0-89.1c0-17.7 14.3-32 32-32l89.1 0c-.8 1-1.6 1.9-2.4 2.7L306.7 454.6zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l220.1 0c12.7 0 24.9-5.1 33.9-14.1L433.9 350.1c9-9 14.1-21.2 14.1-33.9L448 96c0-35.3-28.7-64-64-64L64 32zM96 400a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm0-48a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM80 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm0-48a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Note;