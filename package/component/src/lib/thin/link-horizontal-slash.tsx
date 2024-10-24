
import { Icon } from "../../index";

/**
 * A component that renders the `link-horizontal-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal-slash?s=thin link-horizontal-slash}
 * @preview ![link-horizontal-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/link-horizontal-slash.svg)
 */
const LinkHorizontalSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM406.5 416L320 416c-61.9 0-112-50.1-112-112c0-13.8 2.5-27 7-39.1l-13.1-10.4c-6.4 15.2-9.9 31.9-9.9 49.5c0 70.7 57.3 128 128 128l106.7 0-20.3-16zM432 208c0 13.8-2.5 27-7 39.1l13.1 10.4c6.4-15.2 9.9-31.9 9.9-49.5c0-70.7-57.3-128-128-128L213.3 80l20.3 16L320 96c61.9 0 112 50.1 112 112zM46.2 131.5l-12.6-9.9C12.7 144.4 0 174.7 0 208c0 70.7 57.3 128 128 128l24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0C66.1 320 16 269.9 16 208c0-29.6 11.5-56.4 30.2-76.5zM640 304c0-70.7-57.3-128-128-128l-24 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0c61.9 0 112 50.1 112 112c0 29.6-11.4 56.4-30.2 76.5l12.6 9.9C627.3 367.6 640 337.3 640 304z" />
    </Icon>
);

export default LinkHorizontalSlash;