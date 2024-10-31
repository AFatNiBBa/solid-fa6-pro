
import { Icon } from "../../index";

/**
 * A component that renders the `square-terminal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-terminal?s=regular square-terminal}
 * @preview ![square-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-terminal.svg)
 */
const SquareTerminal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm38.3 119.8c-9 9.8-8.3 25 1.5 33.9L180.5 256l-76.7 70.3c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5l96-88c5-4.5 7.8-11 7.8-17.7s-2.8-13.1-7.8-17.7l-96-88c-9.8-9-25-8.3-33.9 1.5zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
    </Icon>
);

export default SquareTerminal;