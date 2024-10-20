
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=sharp-duotone-solid ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L48 0c20.2 20.2 40.5 40.5 60.7 60.7c-8 8-16 16-24 24c-3.8 3.8-7.5 7.5-11.3 11.3c7.5 7.5 15.1 15.1 22.6 22.6c3.8-3.8 7.5-7.5 11.3-11.3c8-8 16-16 24-24c19.1 19.1 38.2 38.2 57.4 57.4c-8 8-16 16-24 24c-3.8 3.8-7.5 7.5-11.3 11.3c7.5 7.5 15.1 15.1 22.6 22.6c3.8-3.8 7.5-7.5 11.3-11.3c8-8 16-16 24-24c19.1 19.1 38.2 38.2 57.4 57.4c-8 8-16 16-24 24c-3.8 3.8-7.5 7.5-11.3 11.3c7.5 7.5 15.1 15.1 22.6 22.6c3.8-3.8 7.5-7.5 11.3-11.3c8-8 16-16 24-24c19.1 19.1 38.2 38.2 57.4 57.4c-8 8-16 16-24 24c-3.8 3.8-7.5 7.5-11.3 11.3L336 358.6l11.3-11.3 24-24 57.4 57.4c-8 8-16 16-24 24c-3.8 3.8-7.5 7.5-11.3 11.3L416 438.6l11.3-11.3 24-24L512 464l0 48L0 512 0 0zM128 256l0 128 128 0L128 256z" />
        <path d="M108.7 60.7l-24 24L73.4 96 96 118.6l11.3-11.3 24-24L108.7 60.7zm80 80l-24 24L153.4 176 176 198.6l11.3-11.3 24-24-22.6-22.6zm80 80l-24 24L233.4 256 256 278.6l11.3-11.3 24-24-22.6-22.6zm80 80l-24 24L313.4 336 336 358.6l11.3-11.3 24-24-22.6-22.6zm80 80l-24 24L393.4 416 416 438.6l11.3-11.3 24-24-22.6-22.6z" />
    </Icon>
);

export default RulerTriangle;