
import { Icon } from "../../index";

/**
 * A component that renders the `tricycle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle?s=light tricycle}
 * @preview ![tricycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tricycle.svg)
 */
const Tricycle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l85.3 0C372.1 64 384 75.9 384 90.7c0 8.4-4 16.3-10.7 21.3l-42.7 32-27.2 0c-58.4 0-113.2 24.5-152.1 66.1L117.9 160l10.1 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l31.4 0 51 76.5c-2.7 4-5.2 8.1-7.6 12.3l-4.2 7.4c-2.2-.1-4.4-.2-6.6-.2C50.1 256 0 306.1 0 368s50.1 112 112 112s112-50.1 112-112c0-48-30.1-88.9-72.5-104.8C183 209.2 240.8 176 303.4 176l20.1 0 14.2 56.6C289.9 251.2 256 297.6 256 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-5.2 0-10.3 .3-15.3 .9l-14.6-58.5 38.4-28.8c14.8-11.1 23.5-28.5 23.5-46.9C416 58.3 389.7 32 357.3 32L272 32zm73.5 232l23 91.9c2.1 8.6 10.8 13.8 19.4 11.6s13.8-10.8 11.6-19.4l-23-91.8c2.5-.2 4.9-.3 7.4-.3c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-39.3 23.7-73.1 57.5-88zM112 288a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Tricycle;