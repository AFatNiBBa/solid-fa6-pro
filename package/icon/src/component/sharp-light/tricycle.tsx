
import { Icon } from "../../index";

/**
 * A component that renders the `tricycle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle?s=sharp-light tricycle}
 * @preview ![tricycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tricycle.svg)
 */
const Tricycle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32l-16 0 0 32 16 0 112 0 0 40-53.3 40-27.2 0c-58.4 0-113.2 24.5-152.1 66.1L117.9 160l10.1 0 16 0 0-32-16 0-80 0-16 0 0 32 16 0 31.4 0 51 76.5c-2.7 4-5.2 8.1-7.6 12.3l-4.2 7.4c-2.2-.1-4.4-.2-6.6-.2C50.1 256 0 306.1 0 368s50.1 112 112 112s112-50.1 112-112c0-48-30.1-88.9-72.5-104.8C183 209.2 240.8 176 303.4 176l20.1 0 14.2 56.6C289.9 251.2 256 297.6 256 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-5.2 0-10.3 .3-15.3 .9l-14.6-58.5 55.5-41.6L416 120l0-8 0-64 0-16-16 0L272 32zm73.5 232l23 91.9 3.9 15.5 31-7.8-3.9-15.5-23-91.8c2.5-.2 4.9-.3 7.4-.3c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-39.3 23.7-73.1 57.5-88zM112 288a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Tricycle;