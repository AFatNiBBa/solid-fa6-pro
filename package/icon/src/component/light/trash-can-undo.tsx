
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-undo` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-undo?s=light trash-can-undo}
 * @preview ![trash-can-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/trash-can-undo.svg)
 */
const TrashCanUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M164.2 39.5L148.9 64l150.3 0L283.8 39.5c-2.9-4.7-8.1-7.5-13.6-7.5l-92.5 0c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6L336.9 64 384 64l32 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 336c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80L32 96 16 96C7.2 96 0 88.8 0 80s7.2-16 16-16l16 0 32 0 47.1 0L137 22.6C145.8 8.5 161.2 0 177.7 0l92.5 0c16.6 0 31.9 8.5 40.7 22.6zM64 96l0 336c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-336L64 96zm155.9 93.3c5.9 6.6 5.4 16.7-1.2 22.6l-49 44.1 70.3 0c44.2 0 80 35.8 80 80l0 40c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-40c0-26.5-21.5-48-48-48l-70.3 0 49 44.1c6.6 5.9 7.1 16 1.2 22.6s-16 7.1-22.6 1.2l-80-72c-3.4-3-5.3-7.4-5.3-11.9s1.9-8.9 5.3-11.9l80-72c6.6-5.9 16.7-5.4 22.6 1.2z" />
    </Icon>
);

export default TrashCanUndo;