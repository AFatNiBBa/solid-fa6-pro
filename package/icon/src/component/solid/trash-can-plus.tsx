
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-plus?s=solid trash-can-plus}
 * @preview ![trash-can-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trash-can-plus.svg)
 */
const TrashCanPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zM200 408c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z" />
    </Icon>
);

export default TrashCanPlus;