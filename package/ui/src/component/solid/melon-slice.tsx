
import { Icon } from "../../index";

/**
 * A component that renders the `melon-slice` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon-slice?s=solid melon-slice}
 * @preview ![melon-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/melon-slice.svg)
 */
const MelonSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M41 391c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c115.6 115.6 302.6 116 418.3 .3S540.5 122.6 425 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c96.9 96.9 97.1 253.6 .3 350.4S137.9 487.9 41 391zM320 128c0 106-86 192-192 192c-11.4 0-22.5-1-33.3-2.9c-5.4-.9-11 .6-14.8 4.5L59.3 342.2c-6.2 6.2-6.2 16.4 0 22.6l4 4c84.4 84.4 221.1 84.4 305.5 0c84.2-84.2 84.4-220.7 .3-305.1l-4.3-4.3c-6.2-6.2-16.4-6.2-22.6 0L321.6 79.8c-3.9 3.9-5.4 9.4-4.5 14.8c1.9 10.8 2.9 22 2.9 33.3z" />
    </Icon>
);

export default MelonSlice;