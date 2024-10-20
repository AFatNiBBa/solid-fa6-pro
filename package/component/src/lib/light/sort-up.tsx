
import { Icon } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=light sort-up}
 * @preview ![sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sort-up.svg)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M154.4 66.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2 .8 5.6 2.2L285.8 179.7c1.4 1.3 2.2 3.2 2.2 5.2c0 3.9-3.2 7.1-7.1 7.1L39.1 192c-3.9 0-7.1-3.2-7.1-7.1c0-2 .8-3.8 2.2-5.2L154.4 66.2zm-22-23.3L12.3 156.4C4.4 163.8 0 174.1 0 184.9C0 206.5 17.5 224 39.1 224l241.7 0c21.6 0 39.1-17.5 39.1-39.1c0-10.8-4.4-21.1-12.3-28.5L187.6 42.9C180.1 35.9 170.2 32 160 32s-20.1 3.9-27.6 10.9z" />
    </Icon>
);

export default SortUp;