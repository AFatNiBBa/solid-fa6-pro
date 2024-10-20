
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=light square-down}
 * @preview ![square-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-down.svg)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 448c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0zm64-32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 400c-9.2 0-18-3.5-24.7-9.7l-91-84c-7.8-7.2-12.3-17.4-12.3-28.1c0-21.1 17.1-38.3 38.3-38.3l25.7 0 0-80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 80 25.7 0c21.1 0 38.3 17.1 38.3 38.3c0 10.7-4.5 20.9-12.3 28.1l-91 84c-6.7 6.2-15.6 9.7-24.7 9.7zm3-33.2l91-84c1.3-1.2 2-2.9 2-4.6c0-3.5-2.8-6.3-6.3-6.3L272 272c-8.8 0-16-7.2-16-16l0-96c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 96c0 8.8-7.2 16-16 16l-41.7 0c-3.5 0-6.3 2.8-6.3 6.3c0 1.7 .7 3.4 2 4.6l91 84c.8 .8 1.9 1.2 3 1.2s2.2-.4 3-1.2z" />
    </Icon>
);

export default SquareDown;