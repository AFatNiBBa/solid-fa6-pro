
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope-open-text` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=duotone envelope-open-text}
 * @preview ![envelope-open-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/envelope-open-text.svg)
 */
const EnvelopeOpenText: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64l0 64.5 0 79.6 0 41.6c57.6 42.6 115.1 85.3 172.7 127.9c5.6 4.1 12.4 6.4 19.3 6.4s13.7-2.2 19.3-6.4C332.9 335 390.5 292.3 448 249.7l0-41.6 0-79.6L448 64c0-17.7-14.3-32-32-32l-98.2 0L194.2 32 96 32C78.3 32 64 46.3 64 64zm96 80c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16z" />
        <path d="M511.8 202.5c-1.6-18.1-10.9-34.9-25.7-45.8L448 128.5l0 79.6 0 41.6 63.8-47.2zM512 448l0-205.9L294.4 403.3C283.3 411.6 269.8 416 256 416s-27.3-4.4-38.4-12.7L0 242.1 0 448s0 0 0 0c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64c0 0 0 0 0 0zM64 249.7l0-41.6 0-79.6L25.9 156.7C11.1 167.6 1.8 184.4 .2 202.5L64 249.7zM289.5 11.1C279.8 3.9 268.1 0 256 0s-23.8 3.9-33.5 11L194.2 32l123.5 0L289.5 11.1zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" />
    </Icon>
);

export default EnvelopeOpenText;