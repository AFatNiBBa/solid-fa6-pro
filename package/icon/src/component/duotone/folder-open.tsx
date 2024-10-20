
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=duotone folder-open}
 * @preview ![folder-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-open.svg)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 448c0-5.6 1.5-11.1 4.4-16.1l112-192C122.1 230 132.6 224 144 224l336 0 0-64c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96zM2.4 460.1c.3 .7 .6 1.3 .9 1.9s.6 1.3 1 1.9c-.7-1.2-1.3-2.5-1.9-3.8zm459 1c7.6-7.6 13.3-17.2 16.2-27.9l-16.2 27.9z" />
        <path d="M144 224c-11.4 0-21.9 6-27.6 15.9l-112 192c-5.8 9.9-5.8 22.1-.1 32.1S20.5 480 32 480l400 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0z" />
    </Icon>
);

export default FolderOpen;