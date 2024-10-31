
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-tea` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea?s=duotone mug-tea}
 * @preview ![mug-tea](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mug-tea.svg)
 */
const MugTea: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 189.3c0-8.5 3.4-16.6 9.4-22.6l29.3-29.3c6-6 9.4-14.1 9.4-22.6L144 64l32 0 0 50.7c0 8.5 3.4 16.6 9.4 22.6l29.3 29.3c6 6 9.4 14.1 9.4 22.6l0 66.7c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-66.7z" />
        <path d="M144 64l0 50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6L96 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-66.7c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6L176 64l208 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0 0 32c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L32 96c0-17.7 14.3-32 32-32l80 0zM416 256l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128z" />
    </Icon>
);

export default MugTea;