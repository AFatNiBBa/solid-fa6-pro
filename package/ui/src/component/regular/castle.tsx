
import { Icon } from "../../index";

/**
 * A component that renders the `castle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=regular castle}
 * @preview ![castle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/castle.svg)
 */
const Castle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 200-80 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 440c0 39.8 32.2 72 72 72l496 0c39.8 0 72-32.2 72-72l0-256c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-80 0 0-200c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-64 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-64 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-64 0 0-40zm0 88l288 0 0 112-288 0 0-112zM48 272l544 0 0 168c0 13.3-10.7 24-24 24l-184 0 0-80c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 80L72 464c-13.3 0-24-10.7-24-24l0-168z" />
    </Icon>
);

export default Castle;