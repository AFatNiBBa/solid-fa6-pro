
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=light chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 88c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24l0 328 32 0 0-328c0-30.9-25.1-56-56-56L88 32C57.1 32 32 57.1 32 88l0 328 32 0L64 88zM224 400l0 48L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l544 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-144 0 0-48c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48zm48-16l96 0c8.8 0 16 7.2 16 16l0 40-128 0 0-40c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Chalkboard;