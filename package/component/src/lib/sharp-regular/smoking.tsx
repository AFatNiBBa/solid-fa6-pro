
import { Icon } from "../../index";

/**
 * A component that renders the `smoking` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smoking?s=sharp-regular smoking}
 * @preview ![smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/smoking.svg)
 */
const Smoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 0l48 0 0 43c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2l0 43-48 0 0-43c0-17-6.7-33.3-18.7-45.3l-21-21C436.2 142.7 416 93.9 416 43l0-43zM640 288l-48 0 0-43c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2l0-43 48 0 0 43c0 17 6.7 33.3 18.7 45.3l21 21c36 36 56.2 84.8 56.2 135.8l0 43zm-80 88l0 112 0 24-48 0 0-24 0-112 0-24 48 0 0 24zm80 0l0 112 0 24-48 0 0-24 0-112 0-24 48 0 0 24zM224 464l208 0 0-64-208 0 0 64zM0 352l48 0 384 0 48 0 0 48 0 64 0 48-48 0L48 512 0 512l0-48 0-64 0-48z" />
    </Icon>
);

export default Smoking;