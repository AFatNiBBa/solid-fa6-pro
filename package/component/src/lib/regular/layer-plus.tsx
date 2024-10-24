
import { Icon } from "../../index";

/**
 * A component that renders the `layer-plus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-plus?s=regular layer-plus}
 * @preview ![layer-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/layer-plus.svg)
 */
const LayerPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 4c-11 0-20 9-20 20l0 36-36 0c-11 0-20 9-20 20s9 20 20 20l36 0 0 36c0 11 9 20 20 20s20-9 20-20l0-36 36 0c11 0 20-9 20-20s-9-20-20-20l-36 0 0-36c0-11-9-20-20-20zM288 128c-8.5 0-17 1.7-24.8 5.1L53.9 222.8C40.6 228.5 32 241.5 32 256s8.6 27.5 21.9 33.2l209.3 89.7c7.8 3.4 16.3 5.1 24.8 5.1s17-1.7 24.8-5.1l209.3-89.7c13.3-5.7 21.9-18.8 21.9-33.2s-8.6-27.5-21.9-33.2L312.8 133.1c-7.8-3.4-16.3-5.1-24.8-5.1zm-5.9 49.2c1.9-.8 3.9-1.2 5.9-1.2s4 .4 5.9 1.2L477.7 256 293.9 334.8c-1.9 .8-3.9 1.2-5.9 1.2s-4-.4-5.9-1.2L98.3 256l183.8-78.8zM85.1 337.4L53.9 350.8C40.6 356.5 32 369.5 32 384s8.6 27.5 21.9 33.2l209.3 89.7c7.8 3.4 16.3 5.1 24.8 5.1s17-1.7 24.8-5.1l209.3-89.7c13.3-5.7 21.9-18.8 21.9-33.2s-8.6-27.5-21.9-33.2l-31.2-13.4L430 363.5 477.7 384 293.9 462.8c-1.9 .8-3.9 1.2-5.9 1.2s-4-.4-5.9-1.2L98.3 384 146 363.5 85.1 337.4z" />
    </Icon>
);

export default LayerPlus;