
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-ungroup` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-ungroup?s=sharp-duotone-solid object-ungroup}
 * @preview ![object-ungroup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/object-ungroup.svg)
 */
const ObjectUngroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 384l0 128 128 0 0-32 192 0 0 32 128 0 0-128-32 0 0-96 32 0 0-128-128 0 0 32-96 0 0 32 32 0 0 32 64 0 32 0 0 32 0 96 0 32-32 0-192 0-32 0 0-32 0-64-64 0 0 64-32 0z" />
        <path d="M0 0L128 0l0 32 192 0 0-32L448 0l0 128-32 0 0 96 32 0 0 128-128 0 0-32-192 0 0 32L0 352 0 224l32 0 0-96L0 128 0 0zM352 128l0-32-32 0L128 96 96 96l0 32 0 96 0 32 32 0 192 0 32 0 0-32 0-96z" />
    </Icon>
);

export default ObjectUngroup;