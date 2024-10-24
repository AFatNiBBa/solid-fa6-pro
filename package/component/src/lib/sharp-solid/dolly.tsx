
import { Icon } from "../../index";

/**
 * A component that renders the `dolly` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly?s=sharp-solid dolly}
 * @preview ![dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dolly.svg)
 */
const Dolly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L32 0l96 0 23.1 0 7.3 21.9L257.7 320c30.1 .5 56.8 14.9 74 37l202.1-67.4 30.4-10.1 20.2 60.7-30.4 10.1L352 417.7c-.9 52.2-43.5 94.3-96 94.3c-53 0-96-43-96-96c0-30.8 14.5-58.2 37-75.8L104.9 64 32 64 0 64 0 0zM311 79.4l19.8 60.9 60.9-19.8L371.8 59.6l76.1-24.7 69.2 213L327.2 309.6c-9.3-6.3-19.6-11.3-30.4-15L234.9 104.1 311 79.4z" />
    </Icon>
);

export default Dolly;