
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-chart-pie` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-pie?s=duotone file-chart-pie}
 * @preview ![file-chart-pie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-chart-pie.svg)
 */
const FileChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 328c0 66.3 53.7 120 120 120c51.2 0 94.9-32.1 112.1-77.2c3.6-9.5-4-18.8-14.1-18.8c-35.3 0-70.7 0-106 0c-8.8 0-16-7.2-16-16l0-106c0-10.1-9.3-17.7-18.8-14.1C96.1 233.1 64 276.8 64 328zM192 216l0 88c0 8.8 7.2 16 16 16l88 0c8.8 0 16.1-7.2 14.9-16c-7.1-53.5-49.5-95.9-103-103c-8.8-1.2-16 6.1-16 14.9z" />
        <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zM141.2 215.9c9.5-3.6 18.8 4 18.8 14.1l0 106c0 8.8 7.2 16 16 16l106 0c10.1 0 17.7 9.3 14.1 18.8C278.9 415.9 235.2 448 184 448c-66.3 0-120-53.7-120-120c0-51.2 32.1-94.9 77.2-112.1z" />
    </Icon>
);

export default FileChartPie;