
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=thin pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 16L96 16C69.5 16 48 37.5 48 64l0 400-16 0L32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 400-16 0 0-400c0-26.5-21.5-48-48-48zM8 496l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8zM96 96a32 32 0 1 1 64 0A32 32 0 1 1 96 96zm32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM320 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm16 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Pedestal;