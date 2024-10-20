
import { Icon } from "../../index";

/**
 * A component that renders the `prescription` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=regular prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24L0 200l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 78.1 0 128 128L135 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L407 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L441 233c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119-95.3-95.3C246.6 214.7 288 168.2 288 112C288 50.1 237.9 0 176 0L24 0zM176 176L48 176 48 48l128 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" />
    </Icon>
);

export default Prescription;