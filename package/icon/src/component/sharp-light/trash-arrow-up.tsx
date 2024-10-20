
import { Icon } from "../../index";

/**
 * A component that renders the `trash-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-arrow-up?s=sharp-light trash-arrow-up}
 * @preview ![trash-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash-arrow-up.svg)
 */
const TrashArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l-8.9 0-4.7 7.5L111.1 64 64.1 64 32 64 0 64 0 96l34.3 0L64 512l320 0L413.7 96 448 96l0-32-32 0-32.1 0-47.1 0L301.6 7.5 296.9 0 288 0 160 0zM299.1 64L148.9 64l20-32 110.3 0 20 32zM93.8 480L66.4 96l315.3 0L354.2 480 93.8 480zM224 169.4l-11.3 11.3-80 80L121.4 272 144 294.6l11.3-11.3L208 230.6 208 408l32 0 0-177.4 52.7 52.7L304 294.6 326.6 272l-11.3-11.3-80-80L224 169.4z" />
    </Icon>
);

export default TrashArrowUp;