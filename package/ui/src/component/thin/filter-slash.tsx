
import { Icon } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=thin filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM567.8 93.1c5.3-6.7 8.2-15 8.2-23.5C576 48.8 559.2 32 538.4 32L152.5 32l20.3 16 365.7 0c11.9 0 21.6 9.7 21.6 21.6c0 4.9-1.7 9.7-4.7 13.5L424.4 246.7l12.6 9.9L567.8 93.1zM368 385.6l0 68.3c0 5.6-4.5 10.1-10.1 10.1c-2.1 0-4.2-.7-5.9-1.9l-70.1-51c-6.2-4.5-9.9-11.7-9.9-19.4l0-81.9-16-12.6 0 94.5c0 12.8 6.1 24.8 16.5 32.3l70.1 51c4.5 3.2 9.8 5 15.4 5c14.4 0 26.1-11.7 26.1-26.1l0-55.6-16-12.6z" />
    </Icon>
);

export default FilterSlash;