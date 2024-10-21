
import { Icon } from "../../index";

/**
 * A component that renders the `lighthouse` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lighthouse?s=light lighthouse}
 * @preview ![lighthouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lighthouse.svg)
 */
const Lighthouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M23.2 1.7C15.3-2.3 5.6 .9 1.7 8.8s-.7 17.5 7.2 21.5l128 64c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-128-64zm128 188.6c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-128 64c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l128-64zM312.1 2.1l-112 64c-7.7 4.4-10.3 14.2-6 21.8s14.2 10.3 21.8 6l8.1-4.6 0 38.7 32 0 0-57 64-36.6L384 71l0 57 32 0 0-38.7 8.1 4.6c7.7 4.4 17.4 1.7 21.8-6s1.7-17.4-6-21.8l-112-64c-4.9-2.8-11-2.8-15.9 0zM250.2 192l139.5 0 57.6 288L384 480l0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 64-63.4 0 57.6-288zm-32.6 0l-57 285.2c-.2 .9-.3 1.9-.4 2.8L144 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l45.1 0 66.9 0 32 0 64 0 32 0 66.9 0 45.1 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16.1 0c-.1-.9-.2-1.9-.4-2.8L422.4 192l9.6 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-192 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l9.6 0zM352 416l0 64-64 0 0-64c0-17.7 14.3-32 32-32s32 14.3 32 32zM638.3 8.9c-4-7.9-13.6-11.1-21.5-7.2l-128 64c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l128-64c7.9-4 11.1-13.6 7.2-21.5zm-156.6 160c-4 7.9-.7 17.5 7.2 21.5l128 64c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-128-64c-7.9-4-17.5-.7-21.5 7.2z" />
    </Icon>
);

export default Lighthouse;