
import { Icon } from "../../index";

/**
 * A component that renders the `flute` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=thin flute}
 * @preview ![flute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flute.svg)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 336l448 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-448 0 0 160zm-16 0l0-160-48 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l48 0zM64 160l48 0 8 0 8 0 448 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-448 0-8 0-8 0-48 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64zm272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm112 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Flute;