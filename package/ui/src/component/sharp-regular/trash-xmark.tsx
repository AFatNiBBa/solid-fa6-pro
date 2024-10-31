
import { Icon } from "../../index";

/**
 * A component that renders the `trash-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-xmark?s=sharp-regular trash-xmark}
 * @preview ![trash-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-xmark.svg)
 */
const TrashXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L147.2 0 140 10.7 93.8 80 80.1 80 32 80 0 80l0 48 35.6 0L64 512l320 0 28.4-384 35.6 0 0-48-32 0-48.1 0-13.7 0L308 10.7 300.8 0 288 0 160 0zM296.5 80l-145 0 21.3-32 102.3 0 21.3 32zM108.6 464L83.7 128l280.6 0L339.4 464l-230.8 0zM316.3 224L288 195.7l-14.1 14.1L224 259.7l-49.9-49.9L160 195.7 131.7 224l14.1 14.1L195.7 288l-49.9 49.9L131.7 352 160 380.3l14.1-14.1L224 316.3l49.9 49.9L288 380.3 316.3 352l-14.1-14.1L252.3 288l49.9-49.9L316.3 224z" />
    </Icon>
);

export default TrashXmark;