
import { Icon } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=light filter-list}
 * @preview ![filter-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/filter-list.svg)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M27.6 64C12.4 64 0 76.4 0 91.6c0 6.7 2.4 13.2 6.8 18.2L112 230l0 130c0 10 4.7 19.5 12.7 25.5l76.2 57.5c4.2 3.2 9.4 4.9 14.7 4.9c13.5 0 24.4-10.9 24.4-24.4L240 230 345.2 109.8c4.4-5 6.8-11.5 6.8-18.2C352 76.4 339.6 64 324.4 64L27.6 64zM140 213.5L37.3 96l277.5 0L212 213.5c-2.6 2.9-4 6.7-4 10.5l0 184.3L144 360l0-136c0-3.9-1.4-7.6-4-10.5zM336 400c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0zM320 256c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16zM400 80c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0z" />
    </Icon>
);

export default FilterList;