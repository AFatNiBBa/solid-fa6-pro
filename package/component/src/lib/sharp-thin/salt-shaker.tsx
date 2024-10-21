
import { Icon } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=sharp-thin salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M381.5 496l2.5 16-16.2 0L16.2 512 0 512l2.5-16L62.7 110.7C72.7 47 127.5 0 192 0s119.3 47 129.3 110.7L381.5 496zM315.3 176L68.7 176l-50 320 346.6 0-50-320zm-2.5-16l-7.3-46.9C296.7 57.2 248.6 16 192 16S87.3 57.2 78.5 113.1L71.2 160l241.6 0zM176 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM144 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM123.4 224l16.1 0L111 448l-16.1 0 28.4-224zm137.3 0l28.4 224L273 448 244.5 224l16.1 0z" />
    </Icon>
);

export default SaltShaker;