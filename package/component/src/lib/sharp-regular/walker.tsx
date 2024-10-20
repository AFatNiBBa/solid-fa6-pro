
import { Icon } from "../../index";

/**
 * A component that renders the `walker` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=sharp-regular walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M116.9 0L136 0 384 0l24 0 0 24 0 364.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3L360 224l-245 0L55.4 485.3l-5.3 23.4L3.3 498.1l5.3-23.4 104-456L116.9 0zM126 176l234 0 0-128L155.1 48 126 176zM384 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Walker;