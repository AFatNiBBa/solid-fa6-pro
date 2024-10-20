
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backpack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=duotone backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 384l0 16 0 112 256 0 0-112 0-16L96 384zM136 56l0 40 48 0 0-40c0-4.4 3.6-8 8-8l64 0c4.4 0 8 3.6 8 8l0 40 48 0 0-40c0-30.9-25.1-56-56-56L192 0c-30.9 0-56 25.1-56 56z" />
        <path d="M0 224C0 153.3 57.3 96 128 96l192 0c70.7 0 128 57.3 128 128l0 224c0 35.3-28.7 64-64 64l-32 0 0-112 0-64c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48l0 64 0 112-32 0c-35.3 0-64-28.7-64-64L0 224zm144-48c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" />
    </Icon>
);

export default Backpack;