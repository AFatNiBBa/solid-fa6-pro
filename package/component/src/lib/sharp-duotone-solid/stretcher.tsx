
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stretcher` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stretcher?s=sharp-duotone-solid stretcher}
 * @preview ![stretcher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stretcher.svg)
 */
const Stretcher: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 448c0 35.3 28.7 64 64 64s64-28.7 64-64c0-5.3-.7-10.5-1.9-15.5L368 396.2l49.9 36.3c-1.2 5-1.9 10.2-1.9 15.5c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-12.4 0-24 3.5-33.9 9.7l-37.3-27.1 108-78.5-81.6 0L368 336.9 300.8 288l-81.6 0 108 78.5-37.3 27.1c-9.8-6.1-21.4-9.7-33.9-9.7c-35.3 0-64 28.7-64 64zm80 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm224 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M189.1 192L70.8 63.5 .2 128.5l132.5 144L146.9 288l21.1 0 472 0 0-96-450.9 0z" />
    </Icon>
);

export default Stretcher;