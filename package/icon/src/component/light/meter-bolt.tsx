
import { Icon } from "../../index";

/**
 * A component that renders the `meter-bolt` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=light meter-bolt}
 * @preview ![meter-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/meter-bolt.svg)
 */
const MeterBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 256c0 5.7-.2 11.4-.6 17l32.3-30.6C504.6 107.4 392.8 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c69.2 0 132-27.5 178.1-72.1c-12.4-.8-23.7-5.8-32.4-13.7C362.5 459.7 311.6 480 256 480C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224zM176 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm95.7 232l85.1-80.6-19.4 41.9c-2.3 5-1.9 10.7 1 15.3s8 7.4 13.5 7.4l48.3 0-85.1 80.6 19.4-41.9c2.3-5 1.9-10.7-1-15.3s-8-7.4-13.5-7.4l-48.3 0zM585.6 224c-5.1 0-10.1 2-13.8 5.5L422.7 370.7c-4.3 4.1-6.7 9.7-6.7 15.7c0 11.9 9.7 21.6 21.6 21.6l49.4 0-34.8 75.5c-6.1 13.3 3.6 28.5 18.2 28.5c5.1 0 10.1-2 13.8-5.5L633.3 365.3c4.3-4.1 6.7-9.7 6.7-15.7c0-11.9-9.7-21.6-21.6-21.6L569 328l34.8-75.5c6.1-13.3-3.6-28.5-18.2-28.5z" />
    </Icon>
);

export default MeterBolt;