
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=light sort-down}
 * @preview ![sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sort-down.svg)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M154.4 445.8c1.4 1.3 3.5 2.2 5.6 2.2s4.2-.8 5.6-2.2L285.8 332.3c1.4-1.3 2.2-3.2 2.2-5.2c0-3.9-3.2-7.1-7.1-7.1L39.1 320c-3.9 0-7.1 3.2-7.1 7.1c0 2 .8 3.8 2.2 5.2L154.4 445.8zm-22 23.3L12.3 355.6C4.4 348.2 0 337.9 0 327.1C0 305.5 17.5 288 39.1 288l241.7 0c21.6 0 39.1 17.5 39.1 39.1c0 10.8-4.4 21.1-12.3 28.5L187.6 469.1c-7.4 7-17.3 10.9-27.6 10.9s-20.1-3.9-27.6-10.9z" />
    </Icon>
);

export default SortDown;