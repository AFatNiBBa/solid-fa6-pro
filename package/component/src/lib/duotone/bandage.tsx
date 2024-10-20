
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bandage` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=duotone bandage}
 * @preview ![bandage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bandage.svg)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 352c0 35.3 28.7 64 64 64l96 0 0-320L64 96C28.7 96 0 124.7 0 160zM192 96l0 320 256 0 0-320L192 96zM296 208a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96-96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM480 96l0 320 96 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-96 0z" />
        <path d="M192 96l-32 0 0 320 32 0 0-320zm288 0l-32 0 0 320 32 0 0-320z" />
    </Icon>
);

export default Bandage;