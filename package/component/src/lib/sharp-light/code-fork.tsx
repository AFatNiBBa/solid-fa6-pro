
import { Icon } from "../../index";

/**
 * A component that renders the `code-fork` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=sharp-light code-fork}
 * @preview ![code-fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/code-fork.svg)
 */
const CodeFork: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 32l0 96-32 0-32 0-32 0 0-96 96 0zM32 160l32 0 0 32c0 44.2 35.8 80 80 80l64 0 0 80-32 0-32 0 0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-32 0 0-80 64 0c44.2 0 80-35.8 80-80l0-32 32 0 32 0 0-32 0-96 0-32L416 0 320 0 288 0l0 32 0 96 0 32 32 0 32 0 0 32c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-32 32 0 32 0 0-32 0-96 0-32L128 0 32 0 0 0 0 32l0 96 0 32 32 0zm352-32l-32 0-32 0 0-96 96 0 0 96-32 0zM240 384l32 0 0 96-96 0 0-96 32 0 32 0z" />
    </Icon>
);

export default CodeFork;