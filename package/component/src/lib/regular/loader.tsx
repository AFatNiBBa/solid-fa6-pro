
import { Icon } from "../../index";

/**
 * A component that renders the `loader` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=regular loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80zm0 384c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80zM0 256c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24zm408-24c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zM437 75c-9.4-9.4-24.6-9.4-33.9 0l-56.6 56.6c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L437 108.9c9.4-9.4 9.4-24.6 0-33.9zM165.5 380.4c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L75 403.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l56.6-56.6zM75 75c-9.4 9.4-9.4 24.6 0 33.9l56.6 56.6c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L108.9 75c-9.4-9.4-24.6-9.4-33.9 0zM380.5 346.5c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L403.1 437c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56.6-56.6z" />
    </Icon>
);

export default Loader;