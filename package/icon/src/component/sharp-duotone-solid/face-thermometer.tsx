
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-thermometer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-thermometer?s=sharp-duotone-solid face-thermometer}
 * @preview ![face-thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-thermometer.svg)
 */
const FaceThermometer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 256c0 141.4 114.6 256 256 256s256-114.6 256-256c0-3.2-.1-6.4-.2-9.6c-4.5 4.3-9 8.7-13.5 13c-5.1 4.9-10.2 9.8-15.3 14.8c-5.8 5.6-11.5 11.1-17.3 16.7l-15.3 14.8c-5.8 5.6-11.5 11.1-17.3 16.7c-5.1 4.9-10.2 9.8-15.3 14.8c-5.8 5.6-11.5 11.1-17.3 16.7c-8.6 8.2-17.1 16.5-25.7 24.8c2.3 6.1 .7 13.2-4.5 17.7c-6.7 5.8-16.8 5.1-22.6-1.6c-18-20.7-48.5-42.5-91.9-42.5s-74 21.8-91.9 42.5c-5.8 6.7-15.9 7.4-22.6 1.6s-7.4-15.9-1.6-22.6c22.2-25.7 61-53.5 116.1-53.5c18.6 0 35.3 3.2 50.2 8.4c50.3-48.7 100.5-97.3 150.8-146c8.2-7.9 18.7-11.9 29.3-11.9c2 0 4 .1 5.9 .4s3.9 .7 5.8 1.2C495.2 72 400 0 288 0C146.6 0 32 114.6 32 256zm144.4-48c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zm224 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M548 182.8c-16.2-16.2-42.5-16.5-59-.5l-150.8 146c29.2 10.2 51.2 28.2 65.9 45.2c1.3 1.5 2.2 3.1 2.9 4.8l25.7-24.7-25.1-25.1L399 320l17-17 8.5 8.5 25.4 25.4 15.3-14.8-25.7-25.7L431 288l17-17 8.5 8.5 26 26 15.3-14.8-26.3-26.3L463 256l17-17 8.5 8.5 26.6 26.6 15.3-14.8-26.9-26.9L495 224l17-17 8.5 8.5 27.2 27.2c16.7-16.4 16.9-43.3 .3-59.8zM240.4 208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default FaceThermometer;