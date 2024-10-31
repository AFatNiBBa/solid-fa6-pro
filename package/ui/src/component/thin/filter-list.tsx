
import { Icon } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=thin filter-list}
 * @preview ![filter-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/filter-list.svg)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M25.4 64C11.4 64 0 75.4 0 89.4c0 6.2 2.2 12.1 6.3 16.8L112 227l0 141c0 7.5 3.5 14.6 9.5 19.2l73 55.1c4.9 3.7 10.9 5.7 17.1 5.7c15.7 0 28.4-12.7 28.4-28.4L240 227 345.7 106.2c4.1-4.6 6.3-10.6 6.3-16.8C352 75.4 340.6 64 326.6 64L25.4 64zM16 89.4c0-5.2 4.2-9.4 9.4-9.4l301.1 0c5.2 0 9.4 4.2 9.4 9.4c0 2.3-.8 4.5-2.3 6.2L226 218.7c-1.3 1.5-2 3.3-2 5.3l0 195.6c0 6.8-5.5 12.4-12.4 12.4c-2.7 0-5.3-.9-7.5-2.5l-73-55.1c-2-1.5-3.2-3.9-3.2-6.4l0-144c0-1.9-.7-3.8-2-5.3L18.3 95.7c-1.5-1.7-2.3-3.9-2.3-6.2zM328 400c-4.4 0-8 3.6-8 8s3.6 8 8 8l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-176 0zm-8-152c0 4.4 3.6 8 8 8l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-176 0c-4.4 0-8 3.6-8 8zM392 80c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L392 80z" />
    </Icon>
);

export default FilterList;