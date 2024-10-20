
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fondue-pot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fondue-pot?s=duotone fondue-pot}
 * @preview ![fondue-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fondue-pot.svg)
 */
const FonduePot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 224l0 16 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16s7.2 16 16 16s16-7.2 16-16l0-32 0-16-48 0-48 0zm160 0l32.5 0 16.3-65.2c10.6-3 19.4-11.5 22.2-23l24-96c4.3-17.1-6.1-34.5-23.3-38.8S261.2 7.1 257 24.2l-24 96c-2.9 11.5 .9 23.1 8.8 30.8l-17.3 69.1c-.3 1.3-.5 2.6-.5 3.9zm80 0l35.2 0 42.7-64.1c11 .7 22.1-4.3 28.7-14.2l64-96c9.8-14.7 5.8-34.6-8.9-44.4S431.2-.5 421.4 14.2l-64 96c-6.6 9.9-7 22-2.1 31.9l-48.6 72.9c-1.8 2.7-2.7 5.8-2.7 8.9z" />
        <path d="M64 224l-32 0c-17.7 0-32 14.3-32 32l0 64c0 52.3 25.1 98.8 64 128l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-3.2c10.3 2.1 21 3.2 32 3.2l128 0c11 0 21.7-1.1 32-3.2l0 3.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c38.9-29.2 64-75.7 64-128l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0-64 0-224 0 0 16 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-16z" />
    </Icon>
);

export default FonduePot;