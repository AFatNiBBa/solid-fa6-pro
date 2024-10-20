
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=solid trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L497.2 364.4 512 128l-316.4 0L154.8 96 512 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C403.4 6.8 392.3 0 380.2 0L259.8 0c-12.1 0-23.2 6.8-28.6 17.7L224 32l-96 0c-13.4 0-24.8 8.2-29.6 19.8L38.8 5.1zM488 480.5L132.5 200.4 149.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c20.6 0 38.3-13 45.1-31.5z" />
    </Icon>
);

export default TrashSlash;