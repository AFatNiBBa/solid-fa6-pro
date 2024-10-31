
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess?s=duotone chess}
 * @preview ![chess](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess.svg)
 */
const Chess: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 488c0-5.2 1.7-10.2 4.8-14.4L336 416l128 0 43.2 57.6c3.1 4.2 4.8 9.2 4.8 14.4c0 13.3-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24zm16-280c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16 24 0 0-16c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16 24 0 0-16c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 51.5c0 8-3 15.8-8.5 21.7L459.2 312l3.3 72L337 384l2.2-72L312 281.1c-5.1-5.8-8-13.4-8-21.1l0-51.9zm80 96l0 32 32 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16L96 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 32L60.2 96C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208 72 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l4 0L60 384l136 0L180 256l4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-1.8 0 32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2L144 96l0-32 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416z" />
    </Icon>
);

export default Chess;