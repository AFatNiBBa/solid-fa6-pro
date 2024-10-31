
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-xmark?s=sharp-thin trash-can-xmark}
 * @preview ![trash-can-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-can-xmark.svg)
 */
const TrashCanXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L288 0l4.4 0 2.4 3.8L332.4 64 448 64l0 16L0 80 0 64l115.6 0L153.2 3.8 155.6 0 160 0zM313.6 64l-30-48L164.4 16l-30 48 179.1 0zM32 504l0-392 16 0 0 384 352 0 0-384 16 0 0 392 0 8-8 0L40 512l-8 0 0-8zM153.8 206.5l5.7 5.7L224 276.7l64.6-64.6 5.7-5.7 11.3 11.3-5.7 5.7L235.3 288l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L224 299.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L212.7 288l-64.6-64.6-5.7-5.7 11.3-11.3z" />
    </Icon>
);

export default TrashCanXmark;