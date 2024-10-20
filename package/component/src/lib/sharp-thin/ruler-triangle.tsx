
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=sharp-thin ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 16l0 480 480 0 0-25.4L434.3 409l-20.7 20.7-5.7 5.7L396.7 424l5.7-5.7L423 397.7 354.3 329l-20.7 20.7-5.7 5.7L316.7 344l5.7-5.7L343 317.7 274.3 249l-20.7 20.7-5.7 5.7L236.7 264l5.7-5.7L263 237.7 194.3 169l-20.7 20.7-5.7 5.7L156.7 184l5.7-5.7L183 157.7 114.3 89 93.7 109.7 88 115.3 76.7 104l5.7-5.7L103 77.7 41.4 16 16 16zM205.7 157.7l68.7 68.7 11.3 11.3 68.7 68.7 11.3 11.3 68.7 68.7 11.3 11.3L512 464l0 32 0 16-16 0L16 512 0 512l0-16L0 16 0 0 16 0 48 0l66.3 66.3 11.3 11.3 68.7 68.7 11.3 11.3zm-85.7 79l13.7 13.7 128 128L275.3 392 256 392l-128 0-8 0 0-8 0-128 0-19.3zm16 38.6L136 376l100.7 0L136 275.3z" />
    </Icon>
);

export default RulerTriangle;