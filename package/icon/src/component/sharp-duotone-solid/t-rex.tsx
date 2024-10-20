
import { Icon, generic } from "../../index";

/**
 * A component that renders the `t-rex` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t-rex?s=sharp-duotone-solid t-rex}
 * @preview ![t-rex](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/t-rex.svg)
 */
const TRex: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 286.4C0 358 58 416 129.6 416l54.4 0 72 96 128 0 0-16c0-26.5-21.5-48-48-48l-18.6-49.6 41.9-37.7L368 352l0-32c0-35.3-28.7-64-64-64l-16 0-16 0 0-32 16 0 16 0c34.8 0 65.3 18.5 82.1 46.3L432 300.8l0 19.2 0 24 48 0 0-24 0-32 0-12.8L469.3 268l-44.4-29.6L464 208l112 0 21.3-32L552 176l-3.3 0-2.3-2.3L516.7 144 488 144l-8 0 0-16 8 0 32 0 3.3 0 2.3 2.3L555.3 160l52.7 0 24 0 8 0 0-48c0-44.2-35.8-80-80-80l-16 0L528 0 440.3 0 440 0c-33.5 .1-63.2 21.6-73.8 53.4L352 96l-32 32-41 0c-70.7 0-132.9 46.3-153.3 114L112 288l-32 0L48 192l-16 0-6.3 9.4C9 226.6 0 256.1 0 286.4zM512 56a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M480 56a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default TRex;