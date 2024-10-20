
import { Icon } from "../../index";

/**
 * A component that renders the `bridge` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=regular bridge}
 * @preview ![bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bridge.svg)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l48 0 0 64-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 128 0 328 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-64 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 32zM456 80l0 64-80 0 0-64 80 0zM328 80l0 64-80 0 0-64 80 0zM200 80l0 64-80 0 0-64 80 0zM24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24c26.5 0 48 21.5 48 48l0 104c0 22.1 17.9 40 40 40l64 0c22.1 0 40-17.9 40-40l0-96c0-30.9 25.1-56 56-56l32 0c30.9 0 56 25.1 56 56l0 96c0 22.1 17.9 40 40 40l64 0c22.1 0 40-17.9 40-40l0-104c0-26.5 21.5-48 48-48c13.3 0 24-10.7 24-24s-10.7-24-24-24c-53 0-96 43-96 96l0 96-48 0 0-88c0-57.4-46.6-104-104-104l-32 0c-57.4 0-104 46.6-104 104l0 88-48 0 0-96c0-53-43-96-96-96z" />
    </Icon>
);

export default Bridge;