
import { Icon } from "../../index";

/**
 * A component that renders the `fire-hydrant` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-hydrant?s=regular fire-hydrant}
 * @preview ![fire-hydrant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fire-hydrant.svg)
 */
const FireHydrant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-17.7 0-32 14.3-32 32l0 4c-45 11.6-80.4 47-92 92l-12 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-12 0c-11.6-45-47-80.4-92-92l0-4c0-17.7-14.3-32-32-32zM56 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-80 16 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-16 0 0-48-48 0 0 256-160 0 0-256-48 0 0 48-16 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l16 0 0 80-8 0zM248 320a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z" />
    </Icon>
);

export default FireHydrant;