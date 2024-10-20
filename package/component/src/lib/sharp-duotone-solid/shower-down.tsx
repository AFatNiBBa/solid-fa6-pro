
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shower-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shower-down?s=sharp-duotone-solid shower-down}
 * @preview ![shower-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shower-down.svg)
 */
const ShowerDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 352.4C32 369.8 46.2 384 63.6 384l.8 0C81.8 384 96 369.8 96 352.4c0-5.5-1.4-10.9-4.2-15.7L64 288 36.2 336.7c-2.7 4.8-4.2 10.2-4.2 15.7zm64 128c0 17.5 14.2 31.6 31.6 31.6l.8 0c17.5 0 31.6-14.2 31.6-31.6c0-5.5-1.4-10.9-4.2-15.7L128 416l-27.8 48.7c-2.7 4.8-4.2 10.2-4.2 15.7zm64-128c0 17.5 14.2 31.6 31.6 31.6l.8 0c17.5 0 31.6-14.2 31.6-31.6c0-5.5-1.4-10.9-4.2-15.7L192 288l-27.8 48.7c-2.7 4.8-4.2 10.2-4.2 15.7zm64 128c0 17.5 14.2 31.6 31.6 31.6l.8 0c17.5 0 31.6-14.2 31.6-31.6c0-5.5-1.4-10.9-4.2-15.7L256 416l-27.8 48.7c-2.7 4.8-4.2 10.2-4.2 15.7zm64-128c0 17.5 14.2 31.6 31.6 31.6l.8 0c17.5 0 31.6-14.2 31.6-31.6c0-5.5-1.4-10.9-4.2-15.7L320 288l-27.8 48.7c-2.7 4.8-4.2 10.2-4.2 15.7z" />
        <path d="M224 32l0-32L160 0l0 32 0 3.2C87 50 32 114.6 32 192L0 192l0 64 32 0 320 0 32 0 0-64-32 0c0-77.4-55-142-128-156.8l0-3.2z" />
    </Icon>
);

export default ShowerDown;