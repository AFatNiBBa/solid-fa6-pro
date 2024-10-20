
import { Icon } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=regular salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M325.2 464L58.8 464c-6 0-10.8-4.8-10.8-10.8c0-.6 .1-1.3 .2-1.9L94.5 192l195.1 0 46.3 259.3c.1 .6 .2 1.3 .2 1.9c0 6-4.8 10.8-10.8 10.8zM58.8 512l266.4 0c32.5 0 58.8-26.3 58.8-58.8c0-3.5-.3-6.9-.9-10.3L323.7 110.3C312.3 46.5 256.8 0 192 0S71.7 46.5 60.3 110.3L.9 442.9c-.6 3.4-.9 6.9-.9 10.3C0 485.7 26.3 512 58.8 512zM192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM128 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM240 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default SaltShaker;