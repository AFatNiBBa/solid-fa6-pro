
import { Icon } from "../../index";

/**
 * A component that renders the `trash-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-xmark?s=sharp-thin trash-xmark}
 * @preview ![trash-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-xmark.svg)
 */
const TrashXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l-4.4 0-2.4 3.8L115.6 64 0 64 0 80l448 0 0-16L332.4 64 294.8 3.8 292.4 0 288 0 160 0zM313.6 64L134.4 64l30-48 119.1 0 30 48zM24 112l.1 .8 40 392 .7 7.2 7.2 0 304 0 7.2 0 .7-7.2 40-392 .1-.8L408 112 368.8 496 79.2 496 40 112 24 112zm129.8 94.5l-11.3 11.3 5.7 5.7L212.7 288l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L224 299.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L235.3 288l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L224 276.7l-64.6-64.6-5.7-5.7z" />
    </Icon>
);

export default TrashXmark;