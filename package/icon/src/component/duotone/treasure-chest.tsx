
import { Icon, generic } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=duotone treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 96 96 0L96 36C40.8 50.2 0 100.4 0 160zM0 288L0 432c0 26.5 21.5 48 48 48l48 0 0-192L0 288zM160 32l0 224 64 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-224L160 32zm0 256l0 192 256 0 0-192-64 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32-64 0zM480 36l0 220 96 0 0-96c0-59.6-40.8-109.8-96-124zm0 252l0 192 48 0c26.5 0 48-21.5 48-48l0-144-96 0z" />
        <path d="M160 32l0 224-64 0L96 36c10.2-2.6 21-4 32-4l32 0zM416 256l0-224 32 0c11 0 21.8 1.4 32 4l0 220-64 0zM224 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-96zm64 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zM160 480l-64 0 0-192 64 0 0 192zm256 0l0-192 64 0 0 192-64 0z" />
    </Icon>
);

export default TreasureChest;