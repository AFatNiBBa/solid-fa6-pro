
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=duotone filter-list}
 * @preview ![filter-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/filter-list.svg)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M3.5 87.7C9.9 73.3 24.2 64 40 64l272 0c15.8 0 30.1 9.3 36.5 23.7s3.8 31.3-6.8 43L240 243.8 240 416c0 12.1-6.8 23.2-17.7 28.6c-4.5 2.3-9.4 3.4-14.3 3.4c-6.8 0-13.6-2.2-19.2-6.4l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-124.2L10.3 130.8C-.3 119-3 102.2 3.5 87.7z" />
        <path d="M416 64l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zM320 256c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default FilterList;