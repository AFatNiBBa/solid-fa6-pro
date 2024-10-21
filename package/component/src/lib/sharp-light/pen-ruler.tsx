
import { Icon } from "../../index";

/**
 * A component that renders the `pen-ruler` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=sharp-light pen-ruler}
 * @preview ![pen-ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pen-ruler.svg)
 */
const PenRuler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M150.6 22.6L128 0 105.4 22.6 22.6 105.4 0 128l22.6 22.6 82.7 82.7L128 210.7 45.2 128 128 45.3l30.1 30.1-25.4 25.4L121.4 112 144 134.6l11.3-11.3 25.4-25.4L210.7 128l22.6-22.6L150.6 22.6zM361.4 489.4L384 512l22.6-22.6 82.7-82.7L512 384l-22.6-22.6-82.7-82.7L384 301.3l30.1 30.1-25.4 25.4L377.4 368 400 390.6l11.3-11.3 25.4-25.4L466.7 384 384 466.7 301.2 384l-22.6 22.6 82.7 82.7zM6.8 478L0 512l34-6.8L160 480 489.4 150.6 512 128l-22.6-22.6L406.6 22.6 384 0 361.4 22.6 32 352 6.8 478zm34-6.8L61.5 367.8 315.3 113.9l82.7 82.7L144.2 450.5 40.8 471.2zM466.7 128l-46.1 46.1L337.9 91.3 384 45.3 466.7 128z" />
    </Icon>
);

export default PenRuler;