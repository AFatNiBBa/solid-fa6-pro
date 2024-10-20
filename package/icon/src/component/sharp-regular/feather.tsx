
import { Icon } from "../../index";

/**
 * A component that renders the `feather` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=sharp-regular feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path d="M311.9 166.1L112 366.1l0-122.2L276.7 79.2c20-20 47.1-31.2 75.3-31.2s55.3 11.2 75.3 31.2l5.5 5.5c20 20 31.2 47.1 31.2 75.3c0 16.8-4 33.3-11.4 48l-114.6 0 7.9-7.9 17-17-33.9-33.9-17 17zm-22 89.9l122.2 0-48 48-122.2 0 48-48zm26.2 96l-48 48-122.2 0 48-48 122.2 0zM64 224l0 190.1L18.2 459.8l-17 17 33.9 33.9 17-17L97.9 448 288 448 466.7 269.3c29-29 45.3-68.3 45.3-109.3s-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L64 224z" />
    </Icon>
);

export default Feather;