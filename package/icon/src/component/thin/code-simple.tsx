
import { Icon } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=thin code-simple}
 * @preview ![code-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code-simple.svg)
 */
const CodeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M205.5 77.8c3.2-3.1 3.3-8.1 .2-11.3s-8.1-3.3-11.3-.2l-192 184C.9 251.7 0 253.8 0 256s.9 4.3 2.5 5.8l192 184c3.2 3.1 8.3 3 11.3-.2s2.9-8.3-.2-11.3L19.6 256l186-178.2zm164.9 0L556.4 256l-186 178.2c-3.2 3.1-3.3 8.1-.2 11.3s8.1 3.3 11.3 .2l192-184c1.6-1.5 2.5-3.6 2.5-5.8s-.9-4.3-2.5-5.8l-192-184c-3.2-3.1-8.3-2.9-11.3 .2s-3 8.3 .2 11.3z" />
    </Icon>
);

export default CodeSimple;