
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-squint-tears` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-squint-tears?s=sharp-duotone-solid face-grin-squint-tears}
 * @preview ![face-grin-squint-tears](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-squint-tears.svg)
 */
const FaceGrinSquintTears: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M36.5 387.9c4.2-1.1 8.4-2.1 12.5-3c19.7-4.3 40-7.1 50.5-8.6l42.1-5.8-5.9 42c-1.5 10.5-4.4 30.9-8.8 50.6c-.9 4-1.9 8.1-3 12.2C164.4 499.8 210.2 512 256 512c65.5 0 131-25 181-75c84.9-84.9 97.7-214.5 38.5-312.9c-4.2 1.1-8.4 2.1-12.5 3c-19.7 4.3-40 7.1-50.5 8.6l-42.1 5.8 5.9-42c1.5-10.5 4.4-30.9 8.8-50.6c.9-4 1.9-8.1 3-12.2C347.6 12.2 301.8 0 256 0C190.5 0 125 25 75 75C-9.9 159.9-22.7 289.5 36.5 387.9zM75 278.6c43.1-12.9 86.2-25.9 129.3-38.8c-12.9 43.1-25.9 86.2-38.8 129.3l-12.9-77.6c-25.9-4.3-51.7-8.6-77.6-12.9zM176 402.2c45.6-19.7 92-51 133.8-92.8s73.1-88.2 92.8-133.8c40.8 63.7 33.5 149.2-21.9 204.7S239.7 443 176 402.2zm63.9-197.9c12.9-43.1 25.9-86.2 38.8-129.3l12.9 77.6 77.6 12.9c-43.1 12.9-86.2 25.9-129.3 38.8z" />
        <path d="M408 104c3-21 11.1-77 24.8-90.8c17.9-17.9 47.1-17.6 65.3 .7s18.6 47.6 .7 65.6C485.1 93.3 429 101.1 408 104zM239.8 204.3L278.6 75l12.9 77.6 77.6 12.9L239.8 204.3zm-35.6 35.6L165.5 369.1l-12.9-77.6L75 278.6l129.3-38.8zM13.2 432.5C26.9 418.7 83 410.9 104 408c-3 21-11.1 77-24.8 90.8c-17.9 17.9-47.1 17.6-65.3-.7s-18.6-47.6-.7-65.6z" />
    </Icon>
);

export default FaceGrinSquintTears;