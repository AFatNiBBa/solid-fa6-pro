
import { Icon } from "../../index";

/**
 * A component that renders the `cupcake` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cupcake?s=sharp-solid cupcake}
 * @preview ![cupcake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cupcake.svg)
 */
const Cupcake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 128l0 .8c3.3 .5 6.6 1.4 9.9 2.4l20.5 6.8c39.2 13.1 65.6 49.8 65.6 91.1l0 58.8L0 288l0-58.8c0-41.3 26.4-78 65.6-91.1l20.5-6.8c3.2-1.1 6.5-1.9 9.9-2.4l0-.8c0-35.3 28.7-64 64-64l49.3 0c17 0 30.7-13.7 30.7-30.7c0-6.1-1.8-12-5.2-17L224 0c70.7 0 128 57.3 128 128zM291.9 320l-24 192-87.8 0-24-192 135.8 0zM64 320l59.9 0 24 192L96 512 64 320zM300.1 512l24-192 59.9 0L352 512l-51.9 0z" />
    </Icon>
);

export default Cupcake;