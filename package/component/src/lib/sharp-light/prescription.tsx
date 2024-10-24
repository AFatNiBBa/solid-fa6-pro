
import { Icon } from "../../index";

/**
 * A component that renders the `prescription` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=sharp-light prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 0L0 0 0 16 0 208l0 96 0 16 32 0 0-16 0-80 105.4 0 3.3 3.3L265.4 352 140.7 476.7 129.4 488 152 510.6l11.3-11.3L288 374.6 412.7 499.3 424 510.6 446.6 488l-11.3-11.3L310.6 352 435.3 227.3 446.6 216 424 193.4l-11.3 11.3L288 329.4 182.4 223.8C241.3 220.5 288 171.7 288 112C288 50.1 237.9 0 176 0L16 0zM176 192L32 192 32 32l144 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default Prescription;