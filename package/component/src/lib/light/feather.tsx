
import { Icon } from "../../index";

/**
 * A component that renders the `feather` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=light feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path d="M325.6 163.8L96 393.4 96 330c0-59.4 23.6-116.4 65.6-158.4L265.4 67.9c23-23 54.1-35.9 86.6-35.9s63.7 12.9 86.6 35.9l5.5 5.5c23 23 35.9 54.1 35.9 86.6c0 22.8-6.3 44.9-18 64l-151.3 0 37.6-37.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0zm-47 92.2l156.1 0-64 64-156.1 0 64-64zm60.1 96c-41.8 41-98.1 64-156.8 64l-63.3 0 64-64 156.1 0zM64 330l0 95.3L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L86.6 448l95.3 0c67.9 0 133-27 181-75L466.7 269.3c29-29 45.3-68.3 45.3-109.3s-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330z" />
    </Icon>
);

export default Feather;