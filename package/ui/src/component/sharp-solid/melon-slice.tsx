
import { Icon } from "../../index";

/**
 * A component that renders the `melon-slice` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon-slice?s=sharp-solid melon-slice}
 * @preview ![melon-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/melon-slice.svg)
 */
const MelonSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M391.4 391.4C294.6 488.2 137.9 487.9 41 391L7 425c115.6 115.6 302.6 116 418.3 .3S540.5 122.6 425 7L391 41c96.9 96.9 97.1 253.6 .3 350.4zM320 128c0 106-86 192-192 192c-14.4 0-28.4-1.6-41.9-4.6L48 353.5l15.3 15.3c84.4 84.4 221.1 84.4 305.5 0c84.2-84.2 84.4-220.7 .3-305.1L353.5 48 315.4 86.1c3 13.5 4.6 27.5 4.6 41.9z" />
    </Icon>
);

export default MelonSlice;