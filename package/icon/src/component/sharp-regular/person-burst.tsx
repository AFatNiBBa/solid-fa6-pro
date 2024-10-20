
import { Icon } from "../../index";

/**
 * A component that renders the `person-burst` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-burst?s=sharp-regular person-burst}
 * @preview ![person-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-burst.svg)
 */
const PersonBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M222.7 79L203.9 47.1 176 0 148.1 47.1 129.3 79 92.6 73.8 38.4 66.3l19.4 51.2L71 152 44.1 177.5 4.4 215.2l52.1 16.7 35.2 11.3L95 280l4.7 54.6 45.6-30.3L176 283.7l30.8 20.5 45.6 30.3L257 280l3.2-36.9 35.2-11.3 18.1-5.8 15.9-28.2-21.6-20.4L281 152l13.1-34.6 19.4-51.2-54.2 7.6L222.7 79zM239.9 125l-3.8 10-11.4 29.9 23.2 22 7.7 7.3-10.1 3.3-30.4 9.8-2.7 31.9-.9 10.6-8.9-5.9L176 226l-26.6 17.7-8.9 5.9-.9-10.6-2.7-31.9-30.4-9.8-10.1-3.3 7.7-7.3 23.2-22L115.9 135l-3.8-10 10.6 1.5 31.7 4.4 16.3-27.5 5.4-9.2 5.4 9.2 16.3 27.5 31.7-4.4 10.6-1.5zM480 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-51.1 32l-14.1 0-6.9 12.4-75.3 136-11.6 21 42 23.3 11.6-21L416 224.9 416 488l0 24 48 0 0-24 0-136 32 0 0 136 0 24 48 0 0-24 0-263.1 41.4 74.8 11.6 21 42-23.3-11.6-21-75.3-136L545.2 128l-14.1 0-102.2 0zM496 304l-32 0 0-128 32 0 0 128z" />
    </Icon>
);

export default PersonBurst;