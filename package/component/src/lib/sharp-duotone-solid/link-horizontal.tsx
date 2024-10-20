
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=sharp-duotone-solid link-horizontal}
 * @preview ![link-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/link-horizontal.svg)
 */
const LinkHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 304c0 79.5 64.5 144 144 144l160 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-16 0 0 64 16 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-160 0c-44.2 0-80-35.8-80-80c0-36.2 24.1-66.8 57.1-76.7c3.7-1.1 7.5-1.9 11.4-2.5l-9.1-63.4c-7 1-13.9 2.5-20.6 4.5C235.4 183.7 192 238.7 192 304z" />
        <path d="M0 208C0 128.5 64.5 64 144 64l160 0c79.5 0 144 64.5 144 144c0 65.3-43.4 120.3-102.9 138c-6.7 2-13.6 3.5-20.6 4.5l-9.1-63.4c3.9-.6 7.7-1.4 11.4-2.5c33.1-9.8 57.1-40.5 57.1-76.7c0-44.2-35.8-80-80-80l-160 0c-44.2 0-80 35.8-80 80s35.8 80 80 80l16 0 0 64-16 0C64.5 352 0 287.5 0 208z" />
    </Icon>
);

export default LinkHorizontal;