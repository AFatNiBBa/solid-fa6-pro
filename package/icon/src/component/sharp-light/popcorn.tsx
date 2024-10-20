
import { Icon } from "../../index";

/**
 * A component that renders the `popcorn` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popcorn?s=sharp-light popcorn}
 * @preview ![popcorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/popcorn.svg)
 */
const Popcorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176.2 21.5C187.9 8.3 205 0 224 0s36.1 8.3 47.8 21.5C279.1 18 287.3 16 296 16c25.5 0 47 17 53.8 40.3C378 59.2 400 83 400 112c0 2.8-.2 5.5-.6 8.2c15 8.4 26.2 22.7 30.6 39.8l-34.3 0c-4.2-7.3-11.3-12.8-19.7-15l-19-4.9 8.6-17.6c1.5-3.2 2.4-6.7 2.4-10.5c0-13.3-10.7-24-24-24c-1.7 0-3.3 .2-4.8 .5l-19.4 3.9 .2-19.8 0-.7C320 58.7 309.2 48 296 48c-6.7 0-12.7 2.7-17.1 7.1L262.7 71.5l-9.7-20.9C248 39.6 236.9 32 224 32s-24 7.6-29.1 18.6l-9.7 20.9L169.1 55.1C164.7 50.7 158.7 48 152 48c-13.2 0-24 10.7-24 23.9l0 .7 .2 19.8-19.4-3.9c-1.5-.3-3.2-.5-4.8-.5c-13.3 0-24 10.7-24 24c0 3.8 .9 7.3 2.4 10.5L91 140.1 72 145c-8.4 2.2-15.5 7.7-19.7 15L18 160c4.4-17 15.6-31.3 30.6-39.8c-.4-2.7-.6-5.4-.6-8.2c0-29 22-52.8 50.2-55.7C105 33 126.5 16 152 16c8.7 0 16.9 2 24.2 5.5zM105 480l238 0 64-256-57.1 0-32 224-32.3 0 32-224L240 224l0 208 0 16-32 0 0-16 0-208-77.6 0 32 224-32.3 0-32-224L41 224l64 256zm263 32L80 512 8 224 0 192l33 0 382 0 33 0-8 32L368 512z" />
    </Icon>
);

export default Popcorn;