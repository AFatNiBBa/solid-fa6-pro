
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open-text` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=sharp-light envelope-open-text}
 * @preview ![envelope-open-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/envelope-open-text.svg)
 */
const EnvelopeOpenText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 32L96 32l0 190.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 32 64 0 96 0 416 0l32 0 0 32 0 166.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 32zM256 414.8l-18.1-12.5L32 260.8 32 480l448 0 0-219.2L274.1 402.4 256 414.8zM480 222l32-22 0 38.8L512 480l0 32-32 0L32 512 0 512l0-32L0 238.8 0 200l32 22L256 376 480 222zM176 128l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 96l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default EnvelopeOpenText;