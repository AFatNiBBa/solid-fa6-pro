
import { Icon } from "../../index";

/**
 * A component that renders the `stretcher` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stretcher?s=sharp-thin stretcher}
 * @preview ![stretcher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stretcher.svg)
 */
const Stretcher: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M105.7 103.4L188.8 192 592 192l32 0 16 0 0 16 0 64 0 16-16 0-32 0-424 0-20.8 0L133 272.8 35.7 169.1 13.8 145.7 2.9 134l11.7-10.9L61.2 79.3 72.9 68.4 83.8 80.1l21.9 23.3zM592 208l-403.2 0c-4.4 0-8.6-1.8-11.7-5.1L94.1 114.3 72.2 91 25.5 134.8l21.9 23.3 97.3 103.8 9.5 10.1 13.9 0 424 0 32 0 0-64-32 0zM272 464a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 0c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c14.2 0 27 6.2 35.7 16L353 383.2 253 320l30 0 85 53.7L453 320l30 0L383 383.2 460.3 432c8.8-9.8 21.5-16 35.7-16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48c0-6.6 1.3-12.8 3.7-18.5L368 392.6l-83.7 52.9c2.4 5.7 3.7 12 3.7 18.5zm208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Stretcher;