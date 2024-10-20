
import { Icon } from "../../index";

/**
 * A component that renders the `prescription` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=sharp-regular prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 0L0 0 0 24 0 200l0 96 0 24 48 0 0-24 0-72 78.1 0 128 128L146.2 459.8l-17 17 33.9 33.9 17-17L288 385.9 395.8 493.8l17 17 33.9-33.9-17-17L321.9 352 429.8 244.2l17-17-33.9-33.9-17 17L288 318.1l-95.3-95.3C246.6 214.7 288 168.2 288 112C288 50.1 237.9 0 176 0L24 0zM176 176L48 176 48 48l128 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" />
    </Icon>
);

export default Prescription;