
import { Icon } from "../../index";

/**
 * A component that renders the `filters` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=regular filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M233.8 32C210.7 32 192 50.7 192 73.8c0 9.3 3.1 18.4 8.9 25.8L336 272.3l0 63.9c0 12.3 5.6 23.9 15.3 31.5l92.9 73c21 16.5 51.8 1.5 51.8-25.2l0-143.3L631.1 99.6c5.8-7.4 8.9-16.4 8.9-25.8C640 50.7 621.3 32 598.2 32L233.8 32zM378.9 249.2L246.5 80l339 0L453.1 249.2c-3.3 4.2-5.1 9.4-5.1 14.8l0 118.6-64-50.3 0-68.3c0-5.4-1.8-10.6-5.1-14.8zM163.4 96L41.8 96C18.7 96 0 114.7 0 137.8c0 9.3 3.1 18.4 8.9 25.8L144 336.3l0 31.9c0 12.3 5.6 23.9 15.3 31.5l92.9 73c21 16.5 51.8 1.5 51.8-25.2l0-111.3c0 0 0 0 0-.1l0-52.9-9.7-12.5-33.2 42.4c-3.3 4.2-5.1 9.4-5.1 14.8l0 86.6-64-50.3 0-36.3c0-5.4-1.8-10.6-5.1-14.8L54.5 144 195 144l-19.3-24.6c-5.5-7-9.6-15-12.3-23.4z" />
    </Icon>
);

export default Filters;