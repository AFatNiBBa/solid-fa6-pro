
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blanket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=duotone blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 352c0-70.7 57.3-128 128-128l240 0c44.2 0 80 35.8 80 80l0-176c0-53-43-96-96-96L96 32C43 32 0 75 0 128z" />
        <path d="M128 288c-35.3 0-64 28.7-64 64s28.7 64 64 64l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0C57.3 480 0 422.7 0 352s57.3-128 128-128l240 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-240 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l240 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-240 0z" />
    </Icon>
);

export default Blanket;