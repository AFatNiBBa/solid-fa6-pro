
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=duotone dumpster}
 * @preview ![dumpster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dumpster.svg)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 139.1c0-2.1 .3-4.1 .9-6.1L26.8 48.9C29.9 38.9 39.2 32 49.7 32l90.8 0L114.9 160l-94 0C9.3 160 0 150.7 0 139.1zM147.5 160L173.1 32 272 32l0 128-124.5 0zM304 32l98.9 0 25.6 128L304 160l0-128zm131.5 0l90.8 0c10.5 0 19.8 6.9 22.9 16.9L575.1 133c.6 2 .9 4.1 .9 6.1c0 11.5-9.3 20.9-20.9 20.9l-94 0L435.5 32z" />
        <path d="M64 448L44 288l-12 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l4 0-4-32 512 0-4 32 4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-12 0L512 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l-320 0c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
    </Icon>
);

export default Dumpster;