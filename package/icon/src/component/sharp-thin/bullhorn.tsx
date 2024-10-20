
import { Icon } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=sharp-thin bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M446.8 0L444 0l-2.2 1.8L362.1 66c-39.9 32.2-87.7 52.6-138.1 59.5l0 16.1c54-6.9 105.4-28.7 148.1-63.1L448 17.3l0 445.4-75.9-61.1C329.4 367.1 278 345.3 224 338.4l0 16.1c50.4 6.8 98.2 27.3 138.1 59.5l79.7 64.2L444 480l2.8 0 9.2 0 8 0 0-8 0-158.7c28.3-12.3 48-40.5 48-73.3s-19.7-61-48-73.3L464 8l0-8-8 0-9.2 0zM192 416l0-63.9 0-16 0-192.1 0-16c-1.9 0-3.7 .1-5.6 .1L160 128 8 128l-8 0 0 8L0 344l0 8 8 0 56 0 0 152 0 8 8 0 112 0 8 0 0-8 0-88zM464 184.6c19.1 11.1 32 31.7 32 55.4s-12.9 44.4-32 55.4l0-110.9zM176 352l0 144-96 0 0-144 80 0 16 0zm-16-16L16 336l0-192 144 0 16 0 0 192-16 0z" />
    </Icon>
);

export default Bullhorn;