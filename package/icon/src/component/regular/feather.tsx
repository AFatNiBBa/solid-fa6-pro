
import { Icon } from "../../index";

/**
 * A component that renders the `feather` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=regular feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path d="M311.9 166.1L112 366.1l0-36c0-55.2 21.9-108.1 60.9-147.1L276.7 79.2c20-20 47.1-31.2 75.3-31.2s55.3 11.2 75.3 31.2l5.5 5.5c20 20 31.2 47.1 31.2 75.3c0 16.8-4 33.3-11.4 48l-114.6 0 7.9-7.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zm-22 89.9l122.2 0-48 48-122.2 0 48-48zm24.9 96c-37.2 30.9-84.2 48-132.9 48l-36 0 48-48 120.9 0zM64 330l0 84L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 84 0c67.9 0 133-27 181-75L466.7 269.3c29-29 45.3-68.3 45.3-109.3s-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330z" />
    </Icon>
);

export default Feather;