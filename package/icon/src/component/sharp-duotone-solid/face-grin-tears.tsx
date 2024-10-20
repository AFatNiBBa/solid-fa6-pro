
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-tears` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tears?s=sharp-duotone-solid face-grin-tears}
 * @preview ![face-grin-tears](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-tears.svg)
 */
const FaceGrinTears: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M66.3 221.5c13.5-2.4 25.8-4.1 33.2-5.1l42.1-5.8-5.9 42c-1.5 10.5-4.4 30.9-8.8 50.6c-2.2 9.8-5 20.3-8.4 29.6c-3 8.2-8 20-16.6 28.7c-3.4 3.4-7.1 6.5-10.9 9.1C133 454.4 219.8 512 320 512s187-57.6 229-141.5c-3.8-2.6-7.5-5.7-10.9-9.1c-8.7-8.7-13.7-20.5-16.6-28.7c-3.4-9.3-6.2-19.8-8.4-29.6c-4.4-19.7-7.4-40.1-8.8-50.6l-5.9-42 42 5.8c7.5 1 19.8 2.7 33.3 5.2C556.8 96.4 449.7 0 320 0S83.2 96.4 66.3 221.5zM160 302.8c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29C464.3 376.7 398.7 432 320.3 432s-144-55.3-160.2-129.2zM184 232c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm160 0c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
        <path d="M240 152c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zM104 248c-3 21-11.1 77-24.8 90.8c-17.9 17.9-47.1 17.6-65.3-.7s-18.6-47.6-.7-65.6C26.9 258.7 83 250.9 104 248zm432 0c21 2.9 77.1 10.7 90.8 24.5c17.9 18 17.5 47.3-.7 65.6s-47.4 18.6-65.3 .7C547.1 325 539 269 536 248zM344 232c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceGrinTears;