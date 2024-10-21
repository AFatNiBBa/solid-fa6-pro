
import { Icon } from "../../index";

/**
 * A component that renders the `stretcher` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stretcher?s=thin stretcher}
 * @preview ![stretcher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/stretcher.svg)
 */
const Stretcher: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M177.1 202.9L71.3 90.1C59.3 77.2 39 76.6 26.1 88.7s-13.5 32.3-1.5 45.2L135.2 251.8c12.1 12.9 29 20.2 46.7 20.2L592 272c17.7 0 32-14.3 32-32s-14.3-32-32-32l-403.2 0c-4.4 0-8.6-1.8-11.7-5.1zM83 79.2L188.8 192 592 192c26.5 0 48 21.5 48 48s-21.5 48-48 48l-410.1 0c-22.1 0-43.2-9.2-58.4-25.3L13 144.8C-5.1 125.5-4.2 95.1 15.2 77S64.9 59.8 83 79.2zM272 464a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 0c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c14.2 0 27 6.2 35.7 16L353 383.2 253 320l30 0 85 53.7L453 320l30 0L383 383.2 460.3 432c8.8-9.8 21.5-16 35.7-16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48c0-6.6 1.3-12.8 3.7-18.5L368 392.6l-83.7 52.9c2.4 5.7 3.7 12 3.7 18.5zm208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Stretcher;