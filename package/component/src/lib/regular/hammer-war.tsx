
import { Icon } from "../../index";

/**
 * A component that renders the `hammer-war` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-war?s=regular hammer-war}
 * @preview ![hammer-war](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hammer-war.svg)
 */
const HammerWar: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 28L36.7 32.4C17.7 29.5 0 44.7 0 64L0 256c0 19.3 17.7 34.5 36.7 31.6l150.5-22.6c3.1-.5 6.3-.5 9.5 0l150.5 22.6c19.1 2.9 36.7-12.4 36.7-31.6l0-192c0-19.3-17.7-34.5-36.7-31.6L216 52l0-28zm0 276.3l-24-3.6-24 3.6L168 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-187.7zm-35.9-82.7L48 237.4 48 82.6l132.1 19.8c7.9 1.2 15.9 1.2 23.7 0L336 82.6l0 154.8L203.9 217.6c-7.9-1.2-15.9-1.2-23.7 0z" />
    </Icon>
);

export default HammerWar;