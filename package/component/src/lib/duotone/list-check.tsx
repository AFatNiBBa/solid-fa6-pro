
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=duotone list-check}
 * @preview ![list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/list-check.svg)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32z" />
        <path d="M153.8 72.1c8.9-9.9 8.1-25-1.8-33.9s-25-8.1-33.9 1.8L63.1 101.1 41 79C31.6 69.7 16.4 69.7 7 79s-9.4 24.6 0 33.9l40 40c4.7 4.7 11 7.2 17.6 7s12.8-3 17.2-7.9l72-80zm0 160c8.9-9.9 8.1-25-1.8-33.9s-25-8.1-33.9 1.8L63.1 261.1 41 239c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l40 40c4.7 4.7 11 7.2 17.6 7s12.8-3 17.2-7.9l72-80zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ListCheck;