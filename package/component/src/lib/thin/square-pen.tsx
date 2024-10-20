
import { Icon } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=thin square-pen}
 * @preview ![square-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-pen.svg)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM100.7 379.2c-4-4-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L275.4 133.5c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2zM335 193.1c9.4-9.4 9.4-24.6 0-33.9l-14.4-14.4c-9.4-9.4-24.6-9.4-33.9 0l-25.3 25.3 48.3 48.3L335 193.1zM179.6 348.6L298.4 229.7l-48.3-48.3L131.2 300.3c-2.1 2.1-3.5 4.6-4.2 7.4l-10.6 42.5L112 367.9l17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2z" />
    </Icon>
);

export default SquarePen;