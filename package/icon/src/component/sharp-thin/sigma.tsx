
import { Icon } from "../../index";

/**
 * A component that renders the `sigma` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=sharp-thin sigma}
 * @preview ![sigma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sigma.svg)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 480l8 0 368 0 8 0 0-8 0-88 0-8-16 0 0 8 0 80L25.8 464 206 261.3l4.7-5.3-4.7-5.3L25.8 48 368 48l0 80 0 8 16 0 0-8 0-88 0-8-8 0L8 32 0 32 0 43l2 2.3L189.3 256 2 466.7 0 469l0 11z" />
    </Icon>
);

export default Sigma;