
import { Icon } from "../../index";

/**
 * A component that renders the `feather` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=sharp-light feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path d="M325.6 163.8L96 393.4l0-156.1L265.4 67.9c23-23 54.1-35.9 86.6-35.9s63.7 12.9 86.6 35.9l5.5 5.5c23 23 35.9 54.1 35.9 86.6c0 22.8-6.3 44.9-18 64l-151.3 0 37.6-37.6 11.3-11.3-22.6-22.6-11.3 11.3zm-47 92.2l156.1 0-64 64-156.1 0 64-64zm60.1 96l-64 64-156.1 0 64-64 156.1 0zM64 224l0 201.4L14.3 475.1 3 486.4 25.6 509l11.3-11.3L86.6 448 288 448 466.7 269.3c29-29 45.3-68.3 45.3-109.3s-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L64 224z" />
    </Icon>
);

export default Feather;