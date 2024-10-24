
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-arrow-up?s=duotone trash-arrow-up}
 * @preview ![trash-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trash-arrow-up.svg)
 */
const TrashArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l384 0L394.6 466.8c-1.5 25.4-22.5 45.2-47.9 45.2l-245.4 0c-25.4 0-46.5-19.8-47.9-45.2L32 96zm95 151c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L200 376c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1c13 13 26 26 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7l-80 80z" />
        <path d="M163.8 0c-12.1 0-23.2 6.8-28.6 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0zM248 241.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L200 376c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1z" />
    </Icon>
);

export default TrashArrowUp;