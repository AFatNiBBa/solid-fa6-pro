
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=thin jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 16c-8.8 0-16 7.2-16 16l0 32 192 0 0-32c0-8.8-7.2-16-16-16L80 16zM48 66l0-2 0-32C48 14.3 62.3 0 80 0L240 0c17.7 0 32 14.3 32 32l0 32 0 2c27.6 7.1 48 32.2 48 62l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 98.2 20.4 73.1 48 66zM256 80L64 80c-26.5 0-48 21.5-48 48l0 64 288 0 0-64c0-26.5-21.5-48-48-48zM16 368l288 0 0-160L16 208l0 160zm0 16l0 64c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-64L16 384z" />
    </Icon>
);

export default Jar;