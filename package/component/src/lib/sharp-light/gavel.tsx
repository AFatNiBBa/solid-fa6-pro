
import { Icon } from "../../index";

/**
 * A component that renders the `gavel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=sharp-light gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M318.6 24L307.3 35.3 294.6 48 464 217.4l12.7-12.7L488 193.4 510.6 216l-11.3 11.3-24 24-96 96-24 24L344 382.6 321.4 360l11.3-11.3L345.4 336 176 166.6l-12.7 12.7L152 190.6 129.4 168l11.3-11.3 24-24 96-96 24-24L296 1.4 318.6 24zm-120 120L368 313.4 441.4 240 272 70.6 198.6 144zm-80 345.4L96 512 73.4 489.4 22.6 438.6 0 416l22.6-22.6 98.7-98.7L144 272l22.6 22.6 14.1 14.1 40.4-40.4 22.6 22.6-40.4 40.4 14.1 14.1L240 368l-22.6 22.6-98.7 98.7zM194.7 368L144 317.3 45.3 416 96 466.7 194.7 368z" />
    </Icon>
);

export default Gavel;