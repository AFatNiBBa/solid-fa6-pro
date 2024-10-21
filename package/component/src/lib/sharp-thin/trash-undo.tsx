
import { Icon } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=sharp-thin trash-undo}
 * @preview ![trash-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-undo.svg)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M155.6 0L160 0 288 0l4.4 0 2.4 3.8L332.4 64 448 64l0 16L0 80 0 64l115.6 0L153.2 3.8 155.6 0zm128 16L164.4 16l-30 48 179.1 0-30-48zM24 112.8L24 112 40 112 79.2 496l289.5 0L408 112l16.1 0-.1 .8-40 392-.7 7.2-7.2 0L72 512l-7.2 0-.7-7.2-40-392zm195.3 79.7l-5.9 5.4L140.7 264 248 264c39.8 0 72 32.2 72 72l0 40 0 8-16 0 0-8 0-40c0-30.9-25.1-56-56-56l-107.3 0 72.7 66.1 5.9 5.4-10.8 11.8-5.9-5.4-88-80-6.5-5.9 6.5-5.9 88-80 5.9-5.4 10.8 11.8z" />
    </Icon>
);

export default TrashUndo;