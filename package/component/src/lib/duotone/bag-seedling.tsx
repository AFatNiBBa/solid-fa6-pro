
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-seedling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-seedling?s=duotone bag-seedling}
 * @preview ![bag-seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bag-seedling.svg)
 */
const BagSeedling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 247.2l0 17.7c0 36.6 4.5 73.1 13.4 108.7L64 448l384 0 18.6-74.5c8.9-35.5 13.4-72 13.4-108.7l0-17.7c0-36.6-4.5-73.1-13.4-108.7L448 64 64 64 45.4 138.5C36.5 174 32 210.5 32 247.2zM128 176c0-8.8 7.2-16 16-16l2 0c47.3 0 88.4 26 110 64.5C277.6 186 318.7 160 366 160l2 0c8.8 0 16 7.2 16 16c0 59.2-45.9 107.6-104 111.7l0 40.3c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40.3c-58.1-4.1-104-52.6-104-111.7z" />
        <path d="M38.6 38.6L64 64l384 0 25.4-25.4c4.2-4.2 6.6-10 6.6-16C480 10.1 469.9 0 457.4 0L54.6 0C42.1 0 32 10.1 32 22.6c0 6 2.4 11.8 6.6 16zm0 434.7c-4.2 4.2-6.6 10-6.6 16C32 501.9 42.1 512 54.6 512l402.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L448 448 64 448 38.6 473.4zM144 160c-8.8 0-16 7.2-16 16c0 59.2 45.9 107.6 104 111.7l0 40.3c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40.3c58.1-4.1 104-52.6 104-111.7c0-8.8-7.2-16-16-16l-2 0c-47.3 0-88.4 26-110 64.5C234.4 186 193.3 160 146 160l-2 0z" />
    </Icon>
);

export default BagSeedling;