
import { Icon } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=thin salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 453.2c0-2.5-.2-5-.7-7.5L319.2 176 64.8 176 16.7 445.7c-.4 2.5-.7 5-.7 7.5C16 476.8 35.2 496 58.8 496l266.4 0c23.6 0 42.8-19.2 42.8-42.8zM316.3 160l-8.4-46.9C297.9 56.9 249.1 16 192 16S86.1 56.9 76.1 113.1L67.7 160l248.6 0zm8.9 352L58.8 512C26.3 512 0 485.7 0 453.2c0-3.5 .3-6.9 .9-10.3L60.3 110.3C71.7 46.5 127.2 0 192 0s120.3 46.5 131.7 110.3l59.4 332.6c.6 3.4 .9 6.9 .9 10.3c0 32.5-26.3 58.8-58.8 58.8zM176 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM144 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM138.3 233L111.9 441c-.6 4.4-4.6 7.5-8.9 6.9s-7.5-4.6-6.9-8.9l26.4-208c.6-4.4 4.6-7.5 8.9-6.9s7.5 4.6 6.9 8.9zm123.2-2l26.4 208c.6 4.4-2.5 8.4-6.9 8.9s-8.4-2.5-8.9-6.9L245.7 233c-.6-4.4 2.5-8.4 6.9-8.9s8.4 2.5 8.9 6.9z" />
    </Icon>
);

export default SaltShaker;