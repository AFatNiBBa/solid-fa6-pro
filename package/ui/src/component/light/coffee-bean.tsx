
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-bean` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-bean?s=light coffee-bean}
 * @preview ![coffee-bean](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/coffee-bean.svg)
 */
const CoffeeBean: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M390.6 110.9c21.2 27.9 29.6 65.9 23.5 108.9c-7 49.3-33.2 102.9-78.3 148s-98.7 71.3-148 78.3c-40.4 5.8-76.5-1.4-103.8-19.8c.1-.1 .1-.3 .2-.4c16.5-34.5 37.5-72.2 57.4-92.3c29.7-29.9 59.7-44.9 91.8-61l.5-.3s0 0 0 0c32-15.9 66.1-32.9 99.7-66.8c22.8-22.9 42.6-61.6 56.9-94.7zM365.9 87.1c-.6 1.4-1.2 2.9-1.8 4.4c-14.5 34.5-33.5 71.8-53.1 91.5c-29.7 29.9-59.7 44.9-91.8 61l-.5 .3c-32 15.9-66.1 32.9-99.7 66.8C96.7 333.4 75.5 371 59.4 403.6c-22.6-28.1-31.8-67.1-25.5-111.4c7-49.3 33.2-102.9 78.3-148s98.7-71.3 148-78.3c41.4-5.9 78.1 1.7 105.7 21.1zM392.3 67C315.9 4.6 183.9 27.3 89.6 121.6c-98.9 98.9-119 239.2-44.9 313.5c0 0 .1 .1 .1 .1c7.5 7.5 15.8 14.1 24.5 19.7c.4 .3 .8 .5 1.2 .8c77.8 48.6 199.4 23.2 287.8-65.3c99-99 119-239.4 44.8-313.6c-3.5-3.5-7.1-6.8-10.9-9.8z" />
    </Icon>
);

export default CoffeeBean;