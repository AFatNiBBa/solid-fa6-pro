
import { Icon } from "../../index";

/**
 * A component that renders the `layer-minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-minus?s=sharp-regular layer-minus}
 * @preview ![layer-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/layer-minus.svg)
 */
const LayerMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M408 60l-20 0 0 40 20 0 112 0 20 0 0-40-20 0L408 60zM288 331.5L118.2 256 288 180.5 457.8 256 288 331.5zM516.9 229.7L288 128 59.1 229.7 0 256l59.1 26.3L288 384 516.9 282.3 576 256l-59.1-26.3zm-353.2 134l-59.1-26.3L59.1 357.7 0 384l59.1 26.3L288 512 516.9 410.3 576 384l-59.1-26.3-45.5-20.2-59.1 26.3L457.8 384 288 459.5 118.2 384l45.5-20.2z" />
    </Icon>
);

export default LayerMinus;