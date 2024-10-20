
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=duotone trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96L53.4 466.8c1.5 25.4 22.5 45.2 47.9 45.2l213.4 0c25.4 0 46.5-19.8 47.9-45.2L384 96 32 96z" />
        <path d="M147.8 0c-12.1 0-23.2 6.8-28.6 17.7L112 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0-7.2-14.3C291.4 6.8 280.3 0 268.2 0L147.8 0zM448 160c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32zm0 128c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32zm32 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
    </Icon>
);

export default TrashList;