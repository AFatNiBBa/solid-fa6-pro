
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-chart-column` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-column?s=duotone file-chart-column}
 * @preview ![file-chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-chart-column.svg)
 */
const FileChartColumn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 376l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-13.3-10.7-24-24-24s-24 10.7-24 24zm88-128l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176c0-13.3-10.7-24-24-24s-24 10.7-24 24zm88 64l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM216 248c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176zm88 64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM128 376c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48z" />
    </Icon>
);

export default FileChartColumn;