
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=light toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 64l160 0c8.8 0 16 7.2 16 16l0 48-192 0 0-48c0-8.8 7.2-16 16-16zM128 80l0 48-21.5 0c-17 0-33.3 6.7-45.3 18.7L18.7 189.3C6.7 201.3 0 217.5 0 234.5L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-181.5c0-17-6.7-33.3-18.7-45.3l-42.5-42.5c-12-12-28.3-18.7-45.3-18.7L384 128l0-48c0-26.5-21.5-48-48-48L176 32c-26.5 0-48 21.5-48 48zm16 80l224 0 37.5 0c8.5 0 16.6 3.4 22.6 9.4l42.5 42.5c6 6 9.4 14.1 9.4 22.6l0 85.5-128 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-128 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32L32 320l0-85.5c0-8.5 3.4-16.6 9.4-22.6l42.5-42.5c6-6 14.1-9.4 22.6-9.4l37.5 0zM32 352l128 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 128 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 128 0 0 64c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-64z" />
    </Icon>
);

export default Toolbox;