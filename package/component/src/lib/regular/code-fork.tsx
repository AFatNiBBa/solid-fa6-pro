
import { Icon } from "../../index";

/**
 * A component that renders the `code-fork` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=regular code-fork}
 * @preview ![code-fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/code-fork.svg)
 */
const CodeFork: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 35.8-23.5 66.1-56 76.3l0 35.7c0 22.1 17.9 40 40 40l160 0c22.1 0 40-17.9 40-40l0-35.7c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3l0 35.7c0 48.6-39.4 88-88 88l-56 0 0 75.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3l0-75.7-56 0c-48.6 0-88-39.4-88-88l0-35.7C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default CodeFork;