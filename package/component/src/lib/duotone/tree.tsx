
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=duotone tree}
 * @preview ![tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tree.svg)
 */
const Tree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0-224c0-.6 0-1.1 0-1.6s.1-1.1 .1-1.6c.1-1.1 .3-2.1 .5-3.2c.4-2.1 1.1-4.1 1.9-6c1.6-3.8 4-7.3 6.9-10.2c5.8-5.8 13.8-9.4 22.6-9.4c17.7 0 32 14.3 32 32c0 74.7 0 149.3 0 224l168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5z" />
        <path d="M224 192c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Tree;