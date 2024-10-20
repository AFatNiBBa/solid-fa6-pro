
import { Icon } from "../../index";

/**
 * A component that renders the `trash-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-check?s=sharp-light trash-check}
 * @preview ![trash-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash-check.svg)
 */
const TrashCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l-8.9 0-4.7 7.5L111.1 64 64.1 64 32 64 0 64 0 96l34.3 0L64 512l320 0L413.7 96 448 96l0-32-32 0-32.1 0-47.1 0L301.6 7.5 296.9 0 288 0 160 0zM299.1 64L148.9 64l20-32 110.3 0 20 32zM93.8 480L66.4 96l315.3 0L354.2 480 93.8 480zM331.3 235.3L342.6 224 320 201.4l-11.3 11.3L192 329.4l-52.7-52.7L128 265.4 105.4 288l11.3 11.3 64 64L192 374.6l11.3-11.3 128-128z" />
    </Icon>
);

export default TrashCheck;