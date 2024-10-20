
import { Icon } from "../../index";

/**
 * A component that renders the `square-dollar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dollar?s=sharp-regular square-dollar}
 * @preview ![square-dollar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-dollar.svg)
 */
const SquareDollar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM244.2 149.4c18.3 2.6 36.2 7 54.1 11.5l-10.5 41.9c-16.3-4.1-32.5-8.1-49.1-10.6c-16.4-2.4-30.1-.5-39.3 3.5c-11 4.7-18 16.2-6.3 23.7c8.5 5.4 21.5 9.2 39.4 14.3l.8 .2c15.6 4.4 35.5 10.1 50.4 20.3c19.4 13.3 28.5 34.9 24.2 58.1c-4.1 22.4-19.7 37.1-38.4 44.7c-7.8 3.2-16.3 5.2-25.2 6.2l0 36.8L201 400l0-38.9c-11.7-2.6-26.7-7.4-36.6-10.6c0 0 0 0 0 0c-6.6-2.1-13.1-4.2-19.7-6.2c-2.3-.7-4.5-1.4-6.8-2.1l12.9-41.2c2.2 .7 4.4 1.4 6.6 2.1c7.3 2.3 14.6 4.6 21.9 6.9c0 0 0 0 0 0c12.1 3.9 26.4 8.4 34.5 9.7c17 2.5 30.6 1 39.5-2.6c12-4.8 17.7-19.1 5.9-27.1c-10.1-6.9-22.6-10.3-34.5-13.5c-2.3-.6-4.5-1.2-6.8-1.9c-15.1-4.3-34-9.6-48.2-18.7c-19.5-12.5-29.4-33.3-25.2-56.4c3.9-21.5 19.9-35.8 37.8-43.5c5.8-2.5 12.1-4.4 18.6-5.7l0-38.3 43.2 0 0 37.4z" />
    </Icon>
);

export default SquareDollar;