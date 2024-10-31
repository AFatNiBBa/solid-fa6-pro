
import { Icon, generic } from "../../index";

/**
 * A component that renders the `feather` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=duotone feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 330l0 84c82.4-82.4 164.7-164.7 247-247c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17L97.9 448l84 0c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330z" />
        <path d="M24 512c-6.2 0-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9L311 167c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 505c-4.7 4.7-10.8 7-17 7z" />
    </Icon>
);

export default Feather;