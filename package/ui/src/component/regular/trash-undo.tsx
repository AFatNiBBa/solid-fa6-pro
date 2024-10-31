
import { Icon } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=regular trash-undo}
 * @preview ![trash-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/trash-undo.svg)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M177.1 48l93.7 0c2.7 0 5.2 1.3 6.7 3.6l19 28.4-145 0 19-28.4c1.5-2.2 4-3.6 6.7-3.6zM354.2 80L317.5 24.9C307.1 9.4 289.6 0 270.9 0L177.1 0c-18.7 0-36.2 9.4-46.6 24.9L93.8 80 80.1 80 32 80l-8 0C10.7 80 0 90.7 0 104s10.7 24 24 24l11.6 0L59.6 452.7c2.5 33.4 30.3 59.3 63.8 59.3l201.1 0c33.5 0 61.3-25.9 63.8-59.3L412.4 128l11.6 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0-48.1 0-13.7 0zm10.1 48L340.5 449.2c-.6 8.4-7.6 14.8-16 14.8l-201.1 0c-8.4 0-15.3-6.5-16-14.8L83.7 128l280.6 0zM222.9 194.7c-7.3-8.3-20-9-28.2-1.7l-72 64c-4.3 3.8-6.7 9.2-6.7 14.9s2.4 11.2 6.7 14.9l72 64c8.3 7.3 20.9 6.6 28.2-1.7s6.6-20.9-1.7-28.2L188.6 292l51.4 0c24.3 0 44 19.7 44 44l0 24c0 11 9 20 20 20s20-9 20-20l0-24c0-46.4-37.6-84-84-84l-51.4 0 32.7-29.1c8.3-7.3 9-20 1.7-28.2z" />
    </Icon>
);

export default TrashUndo;