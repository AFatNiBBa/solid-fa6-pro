
import { Icon } from "../../index";

/**
 * A component that renders the `draw-circle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-circle?s=solid draw-circle}
 * @preview ![draw-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/draw-circle.svg)
 */
const DrawCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M472.1 196.7c-20.8-76-80.7-135.9-156.7-156.7C305.8 16.5 282.8 0 256 0s-49.8 16.5-59.3 39.9c-76 20.8-135.9 80.7-156.7 156.7C16.5 206.2 0 229.2 0 256s16.5 49.8 39.9 59.3c20.8 76 80.7 135.9 156.7 156.7c9.5 23.4 32.5 39.9 59.3 39.9s49.8-16.5 59.3-39.9c76-20.8 135.9-80.7 156.7-156.7c23.4-9.5 39.9-32.5 39.9-59.3s-16.5-49.8-39.9-59.3zM408 206c-14.7 11.7-24 29.8-24 50s9.4 38.3 24 50c-15.8 48.2-53.9 86.2-102 102c-11.7-14.7-29.8-24-50-24s-38.3 9.4-50 24c-48.2-15.8-86.2-53.9-102-102c14.7-11.7 24-29.8 24-50s-9.4-38.3-24-50c15.8-48.2 53.9-86.2 102-102c11.7 14.7 29.8 24 50 24s38.3-9.4 50-24c48.2 15.8 86.2 53.9 102 102z" />
    </Icon>
);

export default DrawCircle;