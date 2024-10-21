
import { Icon, generic } from "../../index";

/**
 * A component that renders the `violin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/violin?s=sharp-duotone-solid violin}
 * @preview ![violin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/violin.svg)
 */
const Violin: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 368c0 28.6 8.4 55.3 22.8 77.8c19.1-15.3 38.1-30.5 57.2-45.8c10.7 10.7 21.3 21.3 32 32l-23.1 28.9c-7.6 9.4-15.1 18.9-22.7 28.3C216.7 503.6 243.4 512 272 512c35.9 0 68.7-13.1 93.9-34.9C357.1 464.3 352 448.7 352 432c0-44.2 35.8-80 80-80c9.8 0 19.2 1.8 27.8 5c12.8-19.9 20.2-43.6 20.2-69c0-23.7-6.5-46-17.7-65c-7.9 7.9-15.8 15.8-23.7 23.6c-7.5 7.5-15.1 15.1-22.6 22.6c-15.1-15.1-30.2-30.2-45.3-45.3c7.5-7.5 15.1-15.1 22.6-22.6c7.9-7.9 15.8-15.8 23.7-23.6C398 166.5 375.7 160 352 160c-25.4 0-49.1 7.4-69 20.2c3.2 8.7 5 18.1 5 27.8c0 44.2-35.8 80-80 80c-16.7 0-32.3-5.1-45.1-13.9c-21.7 25.2-34.9 58-34.9 93.9zM448 72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-48a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48 144a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-48a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M350.7 35.2l-17 17L52.2 333.8l-17 17L1.3 316.8l17-17L299.8 18.2l17-17 33.9 33.9zM128 464l80-64 32 32-64 80-48-48zM614.6 70.6l-176 176L416 269.3 370.7 224l22.6-22.6 176-176L592 2.7 637.3 48 614.6 70.6z" />
    </Icon>
);

export default Violin;