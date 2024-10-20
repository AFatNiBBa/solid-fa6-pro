
import { Icon } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=solid salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M319.4 448L64.6 448l36.6-256 181.6 0 36.6 256zM59.8 512l264.5 0c33 0 59.8-26.8 59.8-59.8c0-2.8-.2-5.7-.6-8.5L338.1 126.7C327.7 54 265.4 0 192 0S56.3 54 45.9 126.7L.6 443.8c-.4 2.8-.6 5.6-.6 8.5c0 33 26.8 59.8 59.8 59.8zM192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM128 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM240 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default SaltShaker;