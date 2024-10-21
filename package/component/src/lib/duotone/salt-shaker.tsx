
import { Icon, generic } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=duotone salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 452.2c0 33 26.8 59.8 59.8 59.8l264.5 0c33 0 59.8-26.8 59.8-59.8c0-2.8-.2-5.7-.6-8.5L347.4 192l-64.6 0c12.2 85.4 24.4 170.7 36.6 256L64.6 448l36.6-256-64.6 0L.6 443.8c-.4 2.8-.6 5.6-.6 8.5z" />
        <path d="M101.2 192l181.6 0 64.6 0-9.3-65.3C327.7 54 265.4 0 192 0S56.3 54 45.9 126.7L36.6 192l64.6 0zM176 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM144 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default SaltShaker;