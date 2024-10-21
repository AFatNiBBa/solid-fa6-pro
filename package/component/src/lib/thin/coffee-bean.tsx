
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-bean` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-bean?s=thin coffee-bean}
 * @preview ![coffee-bean](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/coffee-bean.svg)
 */
const CoffeeBean: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M391.9 88.1c-.1-.1-.2-.2-.4-.4c-1.7 4.2-3.5 8.6-5.3 13c-14.5 34.4-35 75.8-58.2 99.2c-32.7 32.9-65.8 49.4-97.8 65.4l-.3 .1c-32.1 16-63.2 31.5-93.9 62.5c-21 21.1-42.5 60-59 94.4c-2.3 4.8-4.4 9.4-6.5 13.9c31.7 23.5 73.9 32.2 119.6 25.6c53-7.6 109.7-35.5 157-82.8s75.2-104 82.8-157s-5.3-101.2-38-133.9zM378.7 76.6c-31.9-24.2-74.5-33.1-120.8-26.5c-53 7.6-109.7 35.5-157 82.8s-75.2 104-82.8 157s5.3 101.2 38 133.9c.6 .6 1.1 1.1 1.7 1.7c1.5-3.3 3.1-6.7 4.7-10.1c16.5-34.4 39-75.6 62.1-98.8c32.7-32.9 65.8-49.4 97.8-65.4l.3-.1c32.1-16 63.2-31.5 93.9-62.5c20.8-20.9 40.3-59.6 54.8-94.1c2.6-6.2 5-12.2 7.3-17.9zm24.5 .2c74.2 74.2 54.2 214.6-44.8 313.6c-91.1 91.1-217.2 115.3-294.6 60.8c-.1-.1-.3-.2-.4-.3c-4.3-3.1-8.5-6.4-12.5-10c-2.1-1.8-4.1-3.7-6-5.7C-29.4 361-9.4 220.6 89.6 121.6s239.4-119 313.6-44.8z" />
    </Icon>
);

export default CoffeeBean;