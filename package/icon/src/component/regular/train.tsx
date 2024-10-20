
import { Icon } from "../../index";

/**
 * A component that renders the `train` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=regular train}
 * @preview ![train](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/train.svg)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 48c26.5 0 48 21.5 48 48l0 96L48 192l0-96c0-26.5 21.5-48 48-48l256 0zM48 352l0-112 352 0 0 112c0 26.5-21.5 48-48 48L96 400c-26.5 0-48-21.5-48-48zM96 0C43 0 0 43 0 96L0 352c0 42.8 28 79 66.6 91.4L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 188.1 0 57 57c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-27.6-27.6C420 431 448 394.8 448 352l0-256c0-53-43-96-96-96L96 0zM224 360a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Train;