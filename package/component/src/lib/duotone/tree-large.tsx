
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-large` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-large?s=duotone tree-large}
 * @preview ![tree-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tree-large.svg)
 */
const TreeLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 487.1C0 500.9 11.1 512 24.9 512L192 512l0-288c0-17.7 14.3-32 32-32s32 14.3 32 32l0 288 167.1 0c13.7 0 24.9-11.1 24.9-24.9c0-4.7-1.3-9.2-3.8-13.2L368 352l31.8 0c13.4 0 24.2-10.9 24.2-24.2c0-5-1.6-10-4.5-14.1L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L28.5 313.7c-2.9 4.1-4.5 9-4.5 14.1C24 341.1 34.8 352 48.2 352L80 352 3.8 474c-2.5 4-3.8 8.5-3.8 13.2z" />
        <path d="M224 192c17.7 0 32 14.3 32 32l0 288-64 0 0-288c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default TreeLarge;