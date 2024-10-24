
import { Icon } from "../../index";

/**
 * A component that renders the `prescription` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=thin prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24L0 216l0 96c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 132.7 0 128 128L130.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L288 363.3 434.3 509.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L299.3 352 445.7 205.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L288 340.7 171.3 224l4.7 0c61.9 0 112-50.1 112-112S237.9 0 176 0L24 0zM152 208s0 0 0 0L16 208 16 24c0-4.4 3.6-8 8-8l152 0c53 0 96 43 96 96s-43 96-96 96l-24 0z" />
    </Icon>
);

export default Prescription;