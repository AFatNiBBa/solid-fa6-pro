
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=duotone link-simple}
 * @preview ![link-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/link-simple.svg)
 */
const LinkSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 256c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32z" />
        <path d="M160 96C71.6 96 0 167.6 0 256s71.6 160 160 160l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96-43-96-96s43-96 96-96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0zm256 0l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96 43 96 96s-43 96-96 96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c88.4 0 160-71.6 160-160s-71.6-160-160-160z" />
    </Icon>
);

export default LinkSimple;