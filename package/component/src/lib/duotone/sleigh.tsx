
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=duotone sleigh}
 * @preview ![sleigh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sleigh.svg)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 448c0 17.7 14.3 32 32 32l488 0c48.6 0 88-39.4 88-88l0-8c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 8c0 13.3-10.7 24-24 24l-104 0-64 0-192 0-64 0-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M0 64C0 46.3 14.3 32 32 32l23 0 9 0c2.3 0 4.6 .2 6.7 .7c54.2 4.9 103.5 34.9 132.7 81.6l4.3 6.9c40 64 110.1 102.9 185.6 102.9c30.2 0 54.7-24.5 54.7-54.7l0-41.3c0-17.7 14.3-32 32-32l32 0 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 96c0 53-43 96-96 96l0 64-64 0 0-64-192 0 0 64-64 0 0-64c-53 0-96-43-96-96L32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default Sleigh;