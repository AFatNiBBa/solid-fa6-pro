
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-undo` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-undo?s=thin trash-can-undo}
 * @preview ![trash-can-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trash-can-undo.svg)
 */
const TrashCanUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M157.4 27.3L134.4 64l179.1 0-23-36.7c-4.4-7-12.1-11.3-20.4-11.3l-92.5 0c-8.3 0-16 4.3-20.4 11.3zM115.6 64l28.2-45.2C151.1 7.1 163.9 0 177.7 0l92.5 0c13.8 0 26.6 7.1 33.9 18.8L332.4 64 440 64c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 80c-4.4 0-8-3.6-8-8s3.6-8 8-8l107.6 0zM40 112c4.4 0 8 3.6 8 8l0 320c0 30.9 25.1 56 56 56l240 0c30.9 0 56-25.1 56-56l0-320c0-4.4 3.6-8 8-8s8 3.6 8 8l0 320c0 39.8-32.2 72-72 72l-240 0c-39.8 0-72-32.2-72-72l0-320c0-4.4 3.6-8 8-8zm173.9 74.6c3 3.3 2.7 8.3-.5 11.3L140.7 264 248 264c39.8 0 72 32.2 72 72l0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40c0-30.9-25.1-56-56-56l-107.3 0 72.7 66.1c3.3 3 3.5 8 .5 11.3s-8 3.5-11.3 .5l-88-80c-1.7-1.5-2.6-3.7-2.6-5.9s1-4.4 2.6-5.9l88-80c3.3-3 8.3-2.7 11.3 .5z" />
    </Icon>
);

export default TrashCanUndo;