
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=duotone gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 144c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 128c-8.8 0-16 7.2-16 16zM217 352l104.5 0c23.7 0 44.8-14.9 52.7-37.2L400.9 240l-51 0-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3L229 304l-12 48z" />
        <path d="M504 32c13.3 0 24 10.7 24 24l0 8 16 0c17.7 0 32 14.3 32 32l0 80c0 17.7-14.3 32-32 32l-66.7 0-22.6 22.6c-6 6-14.1 9.4-22.6 9.4l-187 0L191 455.8C187.5 470 174.7 480 160 480l-96 0c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5L73.1 279.8c5-20.2-10.2-39.8-31-39.8l-10 0c-17.7 0-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64l448 0 0-8c0-13.3 10.7-24 24-24zM80 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l384 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 128z" />
    </Icon>
);

export default Gun;