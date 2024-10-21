
import { Icon } from "../../index";

/**
 * A component that renders the `dinosaur` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dinosaur?s=sharp-regular dinosaur}
 * @preview ![dinosaur](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dinosaur.svg)
 */
const Dinosaur: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 0l-8.9 0-6.7 5.8-56 48L352 61l0 11 0 40 0 9.9 7 7 24 24 7 7 9.9 0 72 0c13.3 0 24 10.7 24 24l0 40-40.7 0-34.4-22.9C380.7 174.3 333.5 160 285.2 160c-60.8 0-119.5 22.7-164.5 63.6L7.9 326.2 0 333.4 0 344 0 488l0 24 24 0 272 0 24 0 0-24 0-77.4 0-21.4-21.2-2.5L160 370.6l0-18.6-24 0-24 0 0 24 0 16 0 21.4 21.2 2.5L272 432l0 32L48 464l0-109.4 105.1-95.5c36.2-32.9 83.3-51.1 132.2-51.1c38.8 0 76.7 11.5 109 33l40.5 27 6 4 7.3 0 72 0 24 0 0-24 0-64c0-39.8-32.2-72-72-72l-62.1 0-9.9-9.9 0-19 40.9-35 22.3 0C534.3 48 592 105.7 592 176.8l0 18.2c0 72.1-32 140.4-87.4 186.5l-8.6 7.2 0 11.2 0 64-16 0-16 0-32 0 0-32 0-35.4-32.8 13.1-.1 0c-.2 .1-.5 .2-.9 .3c-.9 .3-2.4 .8-4.6 1.5c-4.2 1.3-10.8 3.1-19.5 5c-6.2 1.3-13.6 2.6-22.1 3.8l0 48.4c12.3-1.5 23-3.4 31.9-5.2c0 0 0 0 .1 0l0 24.5 0 24 24 0 56 0 24 0 32 0 24 0 0-24 0-77c61-55 96-133.4 96-215.9l0-18.2C640 79.2 560.8 0 463.2 0L432 0zm48 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Dinosaur;