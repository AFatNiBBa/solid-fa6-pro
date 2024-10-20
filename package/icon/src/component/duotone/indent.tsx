
import { Icon, generic } from "../../index";

/**
 * A component that renders the `indent` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=duotone indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 81.7 14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM192 192c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32zm0 128c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32z" />
        <path d="M127.8 243.4c8.2 6.4 8.2 18.9 0 25.3L25.8 347.9C15.3 356.1 0 348.6 0 335.3V176.7c0-13.3 15.3-20.8 25.8-12.6l101.9 79.3z" />
    </Icon>
);

export default Indent;