
import { Icon } from "../../index";

/**
 * A component that renders the `brush` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=light brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 352c-17.7 0-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32l-48 0c-26.5 0-48-21.5-48-48l0-16 320 0 0 16c0 26.5-21.5 48-48 48l-48 0zm96-96L32 256 32 64c0-17.7 14.3-32 32-32l32 0 0 112c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112 64 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 96 0c17.7 0 32 14.3 32 32l0 192zM80 384l16 0 32 0 0 32 0 32c0 35.3 28.7 64 64 64s64-28.7 64-64l0-32 0-32 32 0 16 0c44.2 0 80-35.8 80-80l0-240c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 304c0 44.2 35.8 80 80 80z" />
    </Icon>
);

export default Brush;