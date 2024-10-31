
import { Icon } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=solid pen-fancy}
 * @preview ![pen-fancy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pen-fancy.svg)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.3 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z" />
    </Icon>
);

export default PenFancy;