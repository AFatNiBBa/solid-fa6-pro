
import { Icon } from "../../index";

/**
 * A component that renders the `smoking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smoking?s=regular smoking}
 * @preview ![smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/smoking.svg)
 */
const Smoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 0c13.3 0 24 10.7 24 24l0 19c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2l0 19c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-19c0-17-6.7-33.3-18.7-45.3l-21-21C436.2 142.7 416 93.9 416 43l0-19c0-13.3 10.7-24 24-24zM616 288c-13.3 0-24-10.7-24-24l0-19c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2l0-19c0-13.3 10.7-24 24-24s24 10.7 24 24l0 19c0 17 6.7 33.3 18.7 45.3l21 21c36 36 56.2 84.8 56.2 135.8l0 19c0 13.3-10.7 24-24 24zm-56 88l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24zm80 0l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24zM224 464l208 0 0-64-208 0 0 64zM0 416c0-35.3 28.7-64 64-64l384 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32L64 512c-35.3 0-64-28.7-64-64l0-32z" />
    </Icon>
);

export default Smoking;