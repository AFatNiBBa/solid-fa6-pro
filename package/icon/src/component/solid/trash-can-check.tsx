
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-check` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-check?s=solid trash-can-check}
 * @preview ![trash-can-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trash-can-check.svg)
 */
const TrashCanCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zM337 265c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L337 265z" />
    </Icon>
);

export default TrashCanCheck;