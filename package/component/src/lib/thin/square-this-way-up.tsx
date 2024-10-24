
import { Icon } from "../../index";

/**
 * A component that renders the `square-this-way-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-this-way-up?s=thin square-this-way-up}
 * @preview ![square-this-way-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-this-way-up.svg)
 */
const SquareThisWayUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM104 384l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-240 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm18.3-261.7c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L136 147.3 136 312c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-164.7L69.7 197.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l64-64zm192 0c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L328 147.3 328 312c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-164.7-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l64-64z" />
    </Icon>
);

export default SquareThisWayUp;