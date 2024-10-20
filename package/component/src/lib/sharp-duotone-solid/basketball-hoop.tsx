
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basketball-hoop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basketball-hoop?s=sharp-duotone-solid basketball-hoop}
 * @preview ![basketball-hoop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/basketball-hoop.svg)
 */
const BasketballHoop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 201.1L0 372.8l134.4 59.8L113.8 288 96 288l0-48 64 0 0-16 0-80 0-16 16 0 288 0 16 0 0 16 0 80 0 16 64 0 0 48-17.8 0L505.6 432.6 640 372.8l0-171.7c-21.2-38.5-43.7-73.4-75.9-104.2C513.6 48.5 434 0 320 0S126.4 48.5 75.9 96.9C43.7 127.6 21.2 162.6 0 201.1zM192 160l0 64 0 16 256 0 0-16 0-64-256 0z" />
        <path d="M544 240L96 240l0 48 50.1 0 7.2 50.3 22.9 160 2 13.7 13.9 0 8 0 7.2 0 4.8-5.3 44.2-49.5L300 506.6l4.8 5.4 7.2 0 16 0 7.2 0 4.8-5.4 43.9-49.4 44.2 49.5 4.8 5.3 7.2 0 8 0 13.9 0 2-13.7 22.9-160 7.2-50.3 50.1 0 0-48zm-82.4 48l-5.2 36.6-44-36.6 49.2 0zm-99.3 0l1.2 1L320 337.6 276.6 289l1.2-1 84.4 0zm-134.5 0l-44 36.6L178.4 288l49.2 0zM388 309.4l48.5 40.3-52.7 59.3-42.4-47.5L388 309.4zm47.9 158l-30.6-34.3 42.3-47.6-11.7 81.9zM320 385.6l42.4 47.5L320.8 480l-1.6 0-41.6-46.8L320 385.6zm-21.4-24l-42.4 47.5-52.7-59.3L252 309.4l46.6 52.2zM204.1 467.4l-11.7-81.9 42.3 47.6-30.6 34.3z" />
    </Icon>
);

export default BasketballHoop;