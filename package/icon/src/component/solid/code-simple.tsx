
import { Icon } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=solid code-simple}
 * @preview ![code-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/code-simple.svg)
 */
const CodeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6zm146.7 0L498.7 256 361.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3z" />
    </Icon>
);

export default CodeSimple;