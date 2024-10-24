
import { Icon } from "../../index";

/**
 * A component that renders the `broom` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom?s=sharp-regular broom}
 * @preview ![broom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/broom.svg)
 */
const Broom: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 208L544 0l32 32L368 240l34.1 34.1 1.1 1.1L416 288l0 32-75.5 21.6 .1 .6c7.1 46.4-8.3 93.4-41.5 126.7C271.5 496.5 234 512 194.9 512L48 512l-12.1 0L32 512 0 512l0-32 16-16 32-32 16-16 32-32-32 0 0-2.9c0-9 .8-17.9 2.4-26.6c1.1-6.2 2.7-12.4 4.6-18.4c7.1-22.1 19.4-42.4 36.1-59.2c33.2-33.2 80.2-48.6 126.7-41.5l.6 .1L256 160l32 0 12.8 12.8 1.1 1.1L336 208zm-49.1 18.7l-8 28.1 42.3 42.3 28.1-8-62.4-62.4zm4.8 113l-55.4-55.4-9.8-1.5c-31.3-4.8-63 5.6-85.4 28c-7.5 7.5-13.6 16-18.3 25.2l89.1 0-81.9 81.9L83.9 464l111.1 0c26.4 0 51.7-10.5 70.3-29.1c22.4-22.4 32.8-54.1 28-85.4l-1.5-9.8z" />
    </Icon>
);

export default Broom;