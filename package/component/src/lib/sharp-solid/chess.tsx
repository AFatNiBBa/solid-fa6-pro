
import { Icon } from "../../index";

/**
 * A component that renders the `chess` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess?s=sharp-solid chess}
 * @preview ![chess](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess.svg)
 */
const Chess: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0l0 16 0 16 16 0 16 0 0 32-16 0-16 0 0 32 72 0 0 24-29.3 88 21.3 0 0 48-24 0-5.8 0 17.5 128L60.4 384 77.8 256 72 256l-24 0 0-48 21.3 0L40 120l0-24 72 0 0-32L96 64 80 64l0-32 16 0 16 0 0-16 0-16 32 0zM48 416l160 0 4.1 0 2.4 3.4 40 56 1.5 2.1 0 2.6 0 24 0 8-8 0L8 512l-8 0 0-8 0-24 0-2.6 1.5-2.1 40-56 2.4-3.4 4.1 0zM304 272l0-80 40 0 0 32 24 0 0-32 64 0 0 32 24 0 0-32 40 0 0 80-36.8 40 3.3 72L337 384l2.2-72L304 272zm80 64l32 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32zm-48 80l128 0 4.1 0 2.4 3.4 40 56 1.5 2.1 0 2.6 0 24 0 8-8 0-208 0-8 0 0-8 0-24 0-2.6 1.5-2.1 40-56 2.4-3.4 4.1 0z" />
    </Icon>
);

export default Chess;