
import { Icon } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=thin trash-undo}
 * @preview ![trash-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trash-undo.svg)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M177.7 16l92.5 0c8.3 0 16 4.3 20.4 11.3l23 36.7L134.4 64l23-36.7c4.4-7 12.1-11.3 20.4-11.3zm-33.9 2.8L115.6 64 8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L332.4 64 304.2 18.8C296.9 7.1 284.1 0 270.3 0L177.7 0c-13.8 0-26.6 7.1-33.9 18.8zM48 119.3c-.4-4.4-4.2-7.7-8.6-7.3s-7.7 4.2-7.3 8.6l28.3 340c2.4 29 26.7 51.4 55.8 51.4l215.7 0c29.1 0 53.4-22.3 55.8-51.4l28.3-340c.4-4.4-2.9-8.3-7.3-8.6s-8.3 2.9-8.6 7.3l-28.3 340C370 480.1 352.6 496 331.8 496l-215.7 0c-20.8 0-38.1-15.9-39.9-36.7L48 119.3zm165.9 67.3c-3-3.3-8-3.5-11.3-.5l-88 80c-1.7 1.5-2.6 3.7-2.6 5.9s1 4.4 2.6 5.9l88 80c3.3 3 8.3 2.7 11.3-.5s2.7-8.3-.5-11.3L140.7 280 248 280c30.9 0 56 25.1 56 56l0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40c0-39.8-32.2-72-72-72l-107.3 0 72.7-66.1c3.3-3 3.5-8 .5-11.3z" />
    </Icon>
);

export default TrashUndo;