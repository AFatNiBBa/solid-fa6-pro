
import { Icon } from "../../index";

/**
 * A component that renders the `chess` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess?s=sharp-regular chess}
 * @preview ![chess](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess.svg)
 */
const Chess: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0l0 16 0 16 16 0 16 0 0 32-16 0-16 0 0 32 40 0 48 0 0 24-8 24-21.3 64 21.3 0 0 48-24 0-5.8 0 13.1 96-48.4 0-13.1-96-35.5 0L97.2 352l-48.4 0 13.1-96L56 256l-24 0 0-48 21.3 0L32 144l-8-24 0-24 48 0 40 0 0-32L96 64 80 64l0-32 16 0 16 0 0-16 0-16 32 0zM103.9 208l48.1 0 21.3-64-90.8 0 21.3 64zM71.5 432L53.8 464l148.5 0-17.8-32L71.5 432zm141.2-48L256 461.9 299.3 384l169.4 0L512 461.9l0 2.1 0 48-48 0-160 0-48 0-48 0L48 512 0 512l0-48 0-2.1L43.3 384l169.4 0zM280 160l208 0 24 0 0 24 0 72 0 8.7-5.6 6.7L472 312.7l0 15.3 0 24-48 0 0-24 0-24 0-8.7 5.6-6.7L464 247.3l0-39.3-32 0 0 16 0 16-32 0 0-16 0-16-32 0 0 16 0 16-32 0 0-16 0-16-32 0 0 39.3 34.4 41.3 5.6 6.7 0 8.7 0 24 0 24-48 0 0-24 0-15.3-34.4-41.3-5.6-6.7 0-8.7 0-72 0-24 24 0zm29.8 304l148.5 0-17.8-32-112.9 0-17.8 32z" />
    </Icon>
);

export default Chess;