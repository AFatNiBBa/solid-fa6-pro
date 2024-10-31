
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pepper-hot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pepper-hot?s=duotone pepper-hot}
 * @preview ![pepper-hot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pepper-hot.svg)
 */
const PepperHot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 467.6C0 492.1 19.9 512 44.4 512l58.8 0c155.2 0 294.6-82.3 371.5-210c-3.3-2.1-6.3-5.3-8.3-9.4c-3.9-7.8-7.8-15.6-11.7-23.4c-4.1-8.1-12.4-13.3-21.5-13.3c-24.4 0-48.8 0-73.2 0c-13.3 0-24-10.7-24-24c0-26.7 0-53.3 0-80c0-.1 0-.3 0-.4c0-.5 0-1.3-.1-2c-.1-.8-.2-1.6-.4-2.4c-.3-1.6-.8-3.1-1.4-4.5c-1.2-2.9-3-5.5-5.1-7.6c-4.3-4.3-10.3-7-17-7c-5.7 0-11.4 0-17.1 0c-.7 0-1.3 0-1.9-.1c-.6 0-1.2-.1-1.8-.2c-1.2-.2-2.3-.4-3.4-.7c-2.2-.6-4.2-1.5-5.9-2.7L171.2 345.5C154 380 122.2 404.9 84.5 413.2L34.8 424.3C14.5 428.8 0 446.8 0 467.6z" />
        <path d="M461 12.3C454.5 .8 439.9-3.4 428.3 3s-15.8 21-9.3 32.6l4.8 8.7c9.7 17.5 11.5 37.6 6 55.8C406.8 87.3 380.2 80 352 80c-24.3 0-47.3 5.4-67.9 15.1c-19.3 9-10.5 32.9 10.8 32.9l17.1 0c13.3 0 24 10.7 24 24l0 80c0 13.3 10.7 24 24 24l73.2 0c9.1 0 17.4 5.1 21.5 13.3l11.7 23.4c8.2 16.4 30.7 17.5 36.7 .1c5.8-16.5 8.9-34.3 8.9-52.8c0-42.1-16.2-80.4-42.8-108.9c16.4-34.3 15.9-75.4-3.4-110L461 12.3z" />
    </Icon>
);

export default PepperHot;