
import { Icon } from "../../index";

/**
 * A component that renders the `trash-xmark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-xmark?s=solid trash-xmark}
 * @preview ![trash-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trash-xmark.svg)
 */
const TrashXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128l384 0L394.8 467c-1.6 25.3-22.6 45-47.9 45l-245.8 0c-25.3 0-46.3-19.7-47.9-45L32 128zM143 239c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
    </Icon>
);

export default TrashXmark;