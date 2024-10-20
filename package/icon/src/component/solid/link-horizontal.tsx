
import { Icon } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=solid link-horizontal}
 * @preview ![link-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/link-horizontal.svg)
 */
const LinkHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144.6 64C64.7 64 0 128.7 0 208.6c0 70.7 51.1 131 120.8 142.6l1.9 .3c17.4 2.9 33.9-8.9 36.8-26.3s-8.9-33.9-26.3-36.8l-1.9-.3C92.5 281.6 64 248 64 208.6c0-44.5 36.1-80.6 80.6-80.6l158.8 0c44.5 0 80.6 36.1 80.6 80.6c0 39.4-28.5 73-67.4 79.5l-1.9 .3c-17.4 2.9-29.2 19.4-26.3 36.8s19.4 29.2 36.8 26.3l1.9-.3c69.7-11.6 120.8-72 120.8-142.6C448 128.7 383.3 64 303.4 64L144.6 64zM495.4 448C575.3 448 640 383.3 640 303.4c0-70.7-51.1-131-120.8-142.6l-1.9-.3c-17.4-2.9-33.9 8.9-36.8 26.3s8.9 33.9 26.3 36.8l1.9 .3c38.9 6.5 67.4 40.1 67.4 79.5c0 44.5-36.1 80.6-80.6 80.6l-158.8 0c-44.5 0-80.6-36.1-80.6-80.6c0-39.4 28.5-73 67.4-79.5l1.9-.3c17.4-2.9 29.2-19.4 26.3-36.8s-19.4-29.2-36.8-26.3l-1.9 .3C243.1 172.4 192 232.7 192 303.4C192 383.3 256.7 448 336.6 448l158.8 0z" />
    </Icon>
);

export default LinkHorizontal;