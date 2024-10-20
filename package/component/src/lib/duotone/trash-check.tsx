
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-check?s=duotone trash-check}
 * @preview ![trash-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trash-check.svg)
 */
const TrashCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l384 0L394.6 466.8c-1.5 25.4-22.5 45.2-47.9 45.2l-245.4 0c-25.4 0-46.5-19.8-47.9-45.2L32 96zm79 175c-9.4 9.4-9.4 24.6 0 33.9l64 64c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7L337 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM337 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L337 241z" />
    </Icon>
);

export default TrashCheck;