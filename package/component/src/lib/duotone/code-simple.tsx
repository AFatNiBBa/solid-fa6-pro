
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=duotone code-simple}
 * @preview ![code-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code-simple.svg)
 */
const CodeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M352 96c0 8.2 3.1 16.4 9.4 22.6L498.7 256 361.4 393.4c-6.2 6.2-9.4 14.4-9.4 22.6s3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l160-160c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-160-160C400.4 67.1 392.2 64 384 64s-16.4 3.1-22.6 9.4S352 87.8 352 96z" />
        <path d="M214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L77.3 256 214.6 393.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default CodeSimple;