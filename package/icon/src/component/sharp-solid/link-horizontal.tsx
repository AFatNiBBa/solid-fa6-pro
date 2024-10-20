
import { Icon } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=sharp-solid link-horizontal}
 * @preview ![link-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/link-horizontal.svg)
 */
const LinkHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 64C64.5 64 0 128.5 0 208s64.5 144 144 144l16 0 0-64-16 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l160 0c44.2 0 80 35.8 80 80c0 36.2-24.1 66.8-57.1 76.7c-3.7 1.1-7.5 1.9-11.4 2.5l9.1 63.4c7-1 13.9-2.5 20.6-4.5C404.6 328.3 448 273.3 448 208c0-79.5-64.5-144-144-144L144 64zM496 448c79.5 0 144-64.5 144-144s-64.5-144-144-144l-16 0 0 64 16 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-160 0c-44.2 0-80-35.8-80-80c0-36.2 24.1-66.8 57.1-76.7c3.7-1.1 7.5-1.9 11.4-2.5l-9.1-63.4c-7 1-13.9 2.5-20.6 4.5C235.4 183.7 192 238.7 192 304c0 79.5 64.5 144 144 144l160 0z" />
    </Icon>
);

export default LinkHorizontal;