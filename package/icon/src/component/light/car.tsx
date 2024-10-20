
import { Icon } from "../../index";

/**
 * A component that renders the `car` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=light car}
 * @preview ![car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/car.svg)
 */
const Car: typeof Icon = x => (
    <Icon {...x}>
        <path d="M113.6 98.2L85.3 192.6c3.5-.4 7.1-.6 10.7-.6l320 0c3.6 0 7.2 .2 10.7 .6L398.4 98.2c-6.1-20.3-24.8-34.2-46-34.2L159.6 64c-21.2 0-39.9 13.9-46 34.2zM74.3 227.8C49.6 236.7 32 260.3 32 288l0 96 448 0 0-96c0-27.7-17.6-51.3-42.3-60.2l-.5 .1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6L96 224c-7.4 0-14.5 1.3-21.2 3.6l-.1 .3-.5-.1zm-26-23.1l.4-1.3L83 89c10.2-33.8 41.3-57 76.6-57l192.8 0c35.3 0 66.5 23.2 76.6 57l34.3 114.4 .4 1.3C492.6 221.2 512 252.3 512 288l0 96 0 16 0 16 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48L32 416l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-16 0-16 0-96c0-35.7 19.4-66.8 48.3-83.3zM104 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm280 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Car;