
import { Icon } from "../../index";

/**
 * A component that renders the `unicorn` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unicorn?s=sharp-regular unicorn}
 * @preview ![unicorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/unicorn.svg)
 */
const Unicorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 48l32 0 8 0 3.2 0L528 115.3l0 61.1-42.7 19L457 167l-7-7-9.9 0-8 0-24 0 0 24 0 17.7 0 4.8 1.8 4.4c4 9.6 6.2 20.2 6.2 31.4c0 23.5-9.6 44.1-24.7 58.8l-7.3 7.1 0 10.1L384 464l-48 0 0-117.8 0-19.4-19-4c-2.1-.4-4.2-1-6.3-1.6l-88-25.7-31.4-9.2 .7 32.7c0 .4 0 .9 0 1.3c0 8-1.4 16-4.3 23.5L172 385.8l-2.7 7.3 2.1 7.5L188.9 464l-49.8 0-18.2-65.6-2.1-7.5 2.7-7.3 20.6-54.8 3.3-8.7-3.5-8.6-25.3-63.3c-3-7.6-4.6-15.7-4.6-23.9c0-35.5 28.8-64.2 64.2-64.2l22.6 0 57.1 0 57 0 21.2 0 2.6-21C343.2 87.7 387 48 440 48zM551.5 64L540.8 48 560 48l0-48L536 0 508.8 0 496 0 480 0l-8 0L440 0C369.9 0 310.9 47.5 293.3 112L256 112l-57.1 0-22.6 0c-38.1 0-71.8 19-92.1 48.1C37.3 162.1 0 200.7 0 248l0 64 0 24 48 0 0-24 0-64c0-13.2 6.4-25 16.3-32.2c-.2 2.8-.3 5.6-.3 8.5c0 14.3 2.7 28.4 8 41.7l21.9 54.6L76.6 366.7l-5.5 14.6-2.7 7.3 2.1 7.5 4.2 15.1 23.1 83.2 4.9 17.6 18.2 0 99.6 0 31.6 0-8.5-30.4-24-86.3 13-34.8c1.4-3.7 2.6-7.4 3.6-11.2L288 364.5 288 488l0 24 24 0 96 0 24 0 0-24 0-160.2c19.8-22.6 32-52.3 32-85.5l0-.3 10.7 10.7 15.1-6.7 72-32 14.3-6.3 0-15.6 0-84 0-6.7L640 80l0-16-88.5 0zM464 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Unicorn;