
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=duotone link-horizontal}
 * @preview ![link-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/link-horizontal.svg)
 */
const LinkHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 303.4C192 383.3 256.7 448 336.6 448l158.8 0C575.3 448 640 383.3 640 303.4c0-70.7-51.1-131-120.8-142.6l-1.9-.3c-1.8-.3-3.6-.4-5.3-.4c-15.4 0-28.9 11.1-31.5 26.7c-2.9 17.4 8.9 33.9 26.3 36.8l1.9 .3c38.9 6.5 67.4 40.1 67.4 79.5c0 44.5-36.1 80.6-80.6 80.6l-158.8 0c-44.5 0-80.6-36.1-80.6-80.6c0-39.4 28.5-73 67.4-79.5l1.9-.3c17.4-2.9 29.2-19.4 26.3-36.8C349 171.1 335.4 160 320 160c-1.7 0-3.5 .1-5.3 .4l-1.9 .3C243.1 172.4 192 232.7 192 303.4z" />
        <path d="M0 208.6C0 128.7 64.7 64 144.6 64l158.8 0C383.3 64 448 128.7 448 208.6c0 70.7-51.1 131-120.8 142.6l-1.9 .3c-17.4 2.9-33.9-8.9-36.8-26.3s8.9-33.9 26.3-36.8l1.9-.3c38.9-6.5 67.4-40.1 67.4-79.5c0-44.5-36.1-80.6-80.6-80.6l-158.8 0C100.1 128 64 164.1 64 208.6c0 39.4 28.5 73 67.4 79.5l1.9 .3c17.4 2.9 29.2 19.4 26.3 36.8s-19.4 29.2-36.8 26.3l-1.9-.3C51.1 339.6 0 279.3 0 208.6z" />
    </Icon>
);

export default LinkHorizontal;