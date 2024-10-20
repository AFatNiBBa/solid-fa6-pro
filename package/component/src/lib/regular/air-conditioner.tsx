
import { Icon } from "../../index";

/**
 * A component that renders the `air-conditioner` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/air-conditioner?s=regular air-conditioner}
 * @preview ![air-conditioner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/air-conditioner.svg)
 */
const AirConditioner: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 256c-35.3 0-64-28.7-64-64L0 64zm120 64l336 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-336 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM368 288l0 104c0 22.1 17.9 40 40 40s40-17.9 40-40c0-14.8-8-27.7-20-34.7c-11.5-6.6-15.4-21.3-8.7-32.8s21.3-15.4 32.8-8.7C478.3 331 496 359.4 496 392c0 48.6-39.4 88-88 88s-88-39.4-88-88l0-104 48 0zM208 424l0-136 48 0 0 136c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-32.6 17.7-61 43.9-76.2c11.5-6.6 26.2-2.7 32.8 8.7s2.7 26.2-8.7 32.8c-12 7-20 19.9-20 34.7c0 22.1 17.9 40 40 40s40-17.9 40-40z" />
    </Icon>
);

export default AirConditioner;