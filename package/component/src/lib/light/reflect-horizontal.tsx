
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=light reflect-horizontal}
 * @preview ![reflect-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/reflect-horizontal.svg)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c8.8 0 16 7.2 16 16l0 480c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-480c0-8.8 7.2-16 16-16zM32 384L160 256 32 128l0 256zM0 128c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128c12.5 12.5 12.5 32.8 0 45.3l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S0 396.9 0 384L0 128zm480 0L352 256 480 384l0-256zm12.2-29.6c12 5 19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9z" />
    </Icon>
);

export default ReflectHorizontal;