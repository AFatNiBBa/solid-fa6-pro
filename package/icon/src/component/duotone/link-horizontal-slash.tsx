
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-horizontal-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal-slash?s=duotone link-horizontal-slash}
 * @preview ![link-horizontal-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/link-horizontal-slash.svg)
 */
const LinkHorizontalSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208.6c0 70.7 51.1 131 120.8 142.6l1.9 .3c17.4 2.9 33.9-8.9 36.8-26.3s-8.9-33.9-26.3-36.8l-1.9-.3C92.5 281.6 64 248 64 208.6c0-18.5 6.2-35.5 16.6-49.1L30.4 119.9C11.3 144.4 0 175.2 0 208.6zm117.2-142L195.6 128l107.8 0c44.5 0 80.6 36.1 80.6 80.6c0 19.7-7.1 38-19.1 52.1c16.8 13.2 33.6 26.3 50.4 39.5c20.5-25.1 32.7-57.1 32.7-91.6C448 128.7 383.3 64 303.4 64L144.6 64c-9.4 0-18.5 .9-27.4 2.6zM192 303.4C192 383.3 256.7 448 336.6 448l110.2 0-81.2-64-28.9 0c-44.5 0-80.6-36.1-80.6-80.6c0-1.9 .1-3.7 .2-5.5l-55.5-43.8c-5.6 15.4-8.6 32.1-8.6 49.3zM480.4 186.7c-2.9 17.4 8.9 33.9 26.3 36.8l1.9 .3c38.9 6.5 67.4 40.1 67.4 79.5c0 36.6-24.4 67.6-57.9 77.4c18.7 14.6 37.4 29.3 56.1 43.9c39.6-25.8 65.9-70.5 65.9-121.3c0-70.7-51.1-131-120.8-142.6l-1.9-.3c-17.4-2.9-33.9 8.9-36.8 26.3z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default LinkHorizontalSlash;