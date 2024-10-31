
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-lock?s=sharp-light anchor-lock}
 * @preview ![anchor-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/anchor-lock.svg)
 */
const AnchorLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 80a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM288 0c-44.2 0-80 35.8-80 80c0 38.7 27.5 71 64 78.4l0 1.6 0 32-64 0-16 0 0 32 16 0 64 0 0 256L96 480l0-169.4 28.7 28.7L136 350.6 158.6 328l-11.3-11.3-56-56L80 249.4 68.7 260.7l-56 56L1.4 328 24 350.6l11.3-11.3L64 310.6 64 496l0 16 16 0 208 0 96 0 0-32-80 0 0-256 64 0 16 0 0-32-16 0-64 0 0-32 0-1.6c36.5-7.4 64-39.7 64-78.4c0-44.2-35.8-80-80-80zM528 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default AnchorLock;