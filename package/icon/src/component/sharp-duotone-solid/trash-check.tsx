
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-check?s=sharp-duotone-solid trash-check}
 * @preview ![trash-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-check.svg)
 */
const TrashCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96zM94.1 288L128 254.1l17 17 47 47L303 207l17-17L353.9 224l-17 17L209 369l-17 17-17-17-64-64-17-17z" />
        <path d="M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM337 241l17-17L320 190.1l-17 17-111 111-47-47-17-17L94.1 288l17 17 64 64 17 17 17-17L337 241z" />
    </Icon>
);

export default TrashCheck;