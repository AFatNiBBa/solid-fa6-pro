
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-palm` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-palm?s=duotone tree-palm}
 * @preview ![tree-palm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tree-palm.svg)
 */
const TreePalm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 480c0 6.7 2.1 13.4 6.2 19c6 8.2 15.6 13 25.8 13l64 0c16.1 0 29.8-12 31.8-28c3-24 4.4-48.4 4.4-73c0-77-13.8-154.7-36.1-219c-16 0-32 0-48 0c-2.5 0-5-.6-7.1-1.7c-5.5 5.5-11 11-16.5 16.5c4 10.8 7.8 26.2 9.7 47.2c4.2 46.5-1.6 116.8-32.7 216.4c-1 3.1-1.5 6.3-1.5 9.5z" />
        <path d="M133.2 141.9L102.9 91.4c-3.1-5.2-10.6-5.2-13.7 0L69.5 124.1c-1.4 2.4-4 3.9-6.9 3.9L16 128c-8.8 0-16.1-7.2-14.4-15.9C10.7 64.2 59.6 0 160 0c88 0 136.5 49.4 153.2 93.8C338.4 76.2 372.3 64 416 64c100.4 0 149.3 64.2 158.4 112.1c1.7 8.7-5.6 15.9-14.4 15.9l-46.7 0c-2.8 0-5.4-1.5-6.9-3.9l-19.6-32.7c-3.1-5.2-10.6-5.2-13.7 0l-19.6 32.7c-1.4 2.4-4.1 3.9-6.9 3.9L272 192c-2.5 0-5-.6-7.1-1.7L109.8 345.5c-6.2 6.2-16.5 6.3-21.4-1C61 304.1 50.2 224.1 121.1 153.1c4-4 8-7.7 12-11.2z" />
    </Icon>
);

export default TreePalm;