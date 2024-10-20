
import { Icon } from "../../index";

/**
 * A component that renders the `empty-set` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/empty-set?s=regular empty-set}
 * @preview ![empty-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/empty-set.svg)
 */
const EmptySet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L396.5 81.5C358.1 50.6 309.2 32 256 32C132.3 32 32 132.3 32 256c0 53.2 18.6 102.1 49.5 140.5L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.5-74.5c38.4 31 87.3 49.5 140.5 49.5c123.7 0 224-100.3 224-224c0-53.2-18.6-102.1-49.5-140.5L505 41zM362.3 115.7L115.7 362.3C93.3 332.8 80 295.9 80 256c0-97.2 78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7zM149.7 396.3L396.3 149.7C418.7 179.2 432 216.1 432 256c0 97.2-78.8 176-176 176c-39.9 0-76.8-13.3-106.3-35.7z" />
    </Icon>
);

export default EmptySet;