
import { Icon, generic } from "../../index";

/**
 * A component that renders the `smoke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smoke?s=sharp-duotone-solid smoke}
 * @preview ![smoke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/smoke.svg)
 */
const Smoke: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 128c0 32 11.7 61.2 31.1 83.6C87.3 199.1 114.8 192 144 192c9.6 0 19.1 .8 28.3 2.3C196.5 136.6 253.5 96 320 96c27.2 0 52.7 6.8 75.1 18.7c9.3-9.9 19.8-18.6 31.2-25.9C403.4 54.5 364.3 32 320 32c-22 0-42.6 5.5-60.7 15.3C235.9 18.4 200.1 0 160 0C89.3 0 32 57.3 32 128zm171.7 74.4c10.7 3.9 20.9 8.7 30.5 14.5C259.1 201.1 288.5 192 320 192c52.7 0 99.5 25.5 128.6 64.8c5.1-.5 10.2-.8 15.4-.8c52.9 0 99.1 28.5 124.1 70.9C619.6 303.6 640 266.2 640 224c0-70.7-57.3-128-128-128c-46.5 0-87.3 24.8-109.7 62c-22.3-18.7-51-30-82.3-30c-51.6 0-96 30.5-116.3 74.4z" />
        <path d="M0 512l144 0 320 0 112 0 0-112c0-61.9-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C411.8 251.7 369.1 224 320 224c-32.6 0-62.4 12.2-85.1 32.3C210.1 236.1 178.5 224 144 224C64.5 224 0 288.5 0 368L0 512z" />
    </Icon>
);

export default Smoke;