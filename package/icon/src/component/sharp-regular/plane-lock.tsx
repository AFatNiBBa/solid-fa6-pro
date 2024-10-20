
import { Icon } from "../../index";

/**
 * A component that renders the `plane-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-lock?s=sharp-regular plane-lock}
 * @preview ![plane-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/plane-lock.svg)
 */
const PlaneLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M219.3 13.9C228.8 6.3 241.3 0 256 0c29.1 0 49.4 23.1 60.4 41.4C328.2 61.1 336 85.8 336 106l0 51.5 96.7 55.3c-8.5 13.7-14.1 29.3-16 46.1L300.1 192.3 288 185.4l0-13.9 0-65.5c0-9.7-4.4-26-12.8-39.8C266.1 51 258.4 48 256 48c-.6 0-2.8 .2-6.7 3.3c-3.9 3.1-8.2 8.1-12.3 14.9c-8.5 14-13 30.2-13 39.7l0 65.5 0 13.9-12.1 6.9L48 285.9l0 34.3 145.4-41.5 30.6-8.7 0 31.8 0 66.3 0 12-9.6 7.2L160 428l0 32.4 88.9-27.4 7.1-2.2 7.1 2.2L352 460.4l0-32.4-54.4-40.8L288 380l0-12 0-66.3 0-31.8 30.6 8.7L384 297.3l0 49.9-48-13.7 0 22.5 48 36 0 120-8 0-16 0-3.6 0-3.4-1.1L256 481.1l-96.9 29.8-3.4 1.1-3.6 0-16 0-24 0 0-24 0-72 0-12 9.6-7.2L176 356l0-22.5L30.6 375.1 0 383.8 0 352l0-80 0-13.9 12.1-6.9L176 157.5l0-51.5c0-20.3 8.1-45.1 20-64.6c6.1-10 13.8-19.9 23.3-27.5zM528 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default PlaneLock;