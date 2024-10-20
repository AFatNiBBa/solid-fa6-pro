
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=regular circle-sort}
 * @preview ![circle-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-sort.svg)
 */
const CircleSort: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM267.3 100.7l96 96c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-192 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l96-96c6.2-6.2 16.4-6.2 22.6 0zM244.7 411.3l-96-96c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l192 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-96 96c-6.2 6.2-16.4 6.2-22.6 0z" />
    </Icon>
);

export default CircleSort;