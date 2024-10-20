
import { Icon } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=thin skull-crossbones}
 * @preview ![skull-crossbones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/skull-crossbones.svg)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M295.8 220.7C330.3 200.2 352 165.9 352 128c0-60.1-55.5-112-128-112S96 67.9 96 128c0 37.9 21.7 72.2 56.2 92.7c4.8 2.9 7.8 8.1 7.8 13.8l0 21.6c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-21.6c0-5.6 3-10.9 7.8-13.8zM304 256c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-21.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128c0 44.4-25.4 83.5-64 106.4l0 21.6zM176 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-80 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM1 260.1c2.1-3.9 7-5.3 10.9-3.1L224 374.8 436.1 257c3.9-2.1 8.7-.8 10.9 3.1s.8 8.7-3.1 10.9L240.5 384 443.9 497c3.9 2.1 5.3 7 3.1 10.9s-7 5.3-10.9 3.1L224 393.2 11.9 511c-3.9 2.1-8.7 .8-10.9-3.1s-.8-8.7 3.1-10.9L207.5 384 4.1 271c-3.9-2.1-5.3-7-3.1-10.9z" />
    </Icon>
);

export default SkullCrossbones;