
import { Icon } from "../../index";

/**
 * A component that renders the `code-merge` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=regular code-merge}
 * @preview ![code-merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/code-merge.svg)
 */
const CodeMerge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm24.7 108.1C136.8 145.7 160 115.6 160 80c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3l0 199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3l0-100.8c27.2 25.5 63.8 41.1 104 41.1l83.7 0c10.2 32.5 40.5 56 76.3 56c44.2 0 80-35.8 80-80s-35.8-80-80-80c-35.8 0-66.1 23.5-76.3 56L208 248c-53.3 0-97.3-40.2-103.3-91.9zM80 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM336 272a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CodeMerge;