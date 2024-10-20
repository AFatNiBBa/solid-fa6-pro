
import { Icon } from "../../index";

/**
 * A component that renders the `glass` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=regular glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 0C17.3 0 10.9 2.8 6.3 7.8S-.5 19.4 .1 26.1L36.3 446.2C39.5 483.4 70.7 512 108 512L276 512c37.4 0 68.5-28.6 71.7-65.8L383.9 26.1c.6-6.7-1.7-13.3-6.2-18.3s-11-7.8-17.7-7.8L24 0zM57.1 128L50.2 48l283.7 0-6.9 80L57.1 128zm4.1 48l261.6 0L299.9 442.1C298.8 454.5 288.4 464 276 464L108 464c-12.5 0-22.8-9.5-23.9-21.9L61.2 176z" />
    </Icon>
);

export default Glass;