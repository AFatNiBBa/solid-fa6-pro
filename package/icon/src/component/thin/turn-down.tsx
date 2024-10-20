
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=thin turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 336l-89.1 0c-3.8 0-6.9 3.1-6.9 6.9c0 1.8 .7 3.5 1.9 4.7L190.1 495.2c.5 .5 1.2 .8 1.9 .8s1.4-.3 1.9-.8L334.1 347.6c1.2-1.3 1.9-3 1.9-4.7c0-3.8-3.1-6.9-6.9-6.9L240 336c-8.8 0-16-7.2-16-16l0-208c0-53-43-96-96-96L40 16C26.7 16 16 26.7 16 40l0 16c0 13.3 10.7 24 24 24l88 0c17.7 0 32 14.3 32 32l0 208c0 8.8-7.2 16-16 16zm34.5 170.2L38.3 358.6c-4-4.2-6.3-9.9-6.3-15.8C32 330.2 42.2 320 54.9 320l73.1 0 16 0 0-16 0-192c0-8.8-7.2-16-16-16L40 96C17.9 96 0 78.1 0 56L0 40C0 17.9 17.9 0 40 0l88 0c61.9 0 112 50.1 112 112l0 192 0 16 16 0 73.1 0c12.6 0 22.9 10.2 22.9 22.9c0 5.9-2.3 11.5-6.3 15.8L205.5 506.2c-3.5 3.7-8.4 5.8-13.5 5.8s-10-2.1-13.5-5.8z" />
    </Icon>
);

export default TurnDown;