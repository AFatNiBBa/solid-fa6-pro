
import { Icon } from "../../index";

/**
 * A component that renders the `loader` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=light loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm0 384l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zM0 256c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm400-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM437 75c6.2 6.2 6.2 16.4 0 22.6l-67.9 67.9c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L414.4 75c6.2-6.2 16.4-6.2 22.6 0zM165.5 369.1L97.6 437c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l67.9-67.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM75 75c6.2-6.2 16.4-6.2 22.6 0l67.9 67.9c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L75 97.6c-6.2-6.2-6.2-16.4 0-22.6zM369.1 346.5L437 414.4c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-67.9-67.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0z" />
    </Icon>
);

export default Loader;