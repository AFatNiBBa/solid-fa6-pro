
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skeleton-ribs` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton-ribs?s=duotone skeleton-ribs}
 * @preview ![skeleton-ribs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/skeleton-ribs.svg)
 */
const SkeletonRibs: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 96L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240c0-10.1 4.7-19.6 12.8-25.6l25.6-19.2C118.5 183.1 128 164.1 128 144c0-35.3-28.7-64-64-64S0 108.7 0 144zM160.3 372.7L288 337.9l0 42c21.1-4.3 42.9-4.3 64 0l0-40.9 118.8 35.6c3 .9 6.1 1.3 9.1 1.4c-.7-22.1-4.5-45.3-10.1-68.5L352 272.2l0-40.3 102 22.7c-9-26-19.4-50.6-29.3-72.1L352 166.3l0-38.3-64 0 0 38.3-72.7 16.2c-9.9 21.4-20.2 46.1-29.3 72.1l102-22.7 0 39.7L171.2 303.4c-5.9 23.4-9.9 46.9-11 69.3zM288 32l0 32 64 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 414.2l0 33.8c0 17.7 14.3 32 32 32s32-14.3 32-32l0-33.8c-20.7-7.3-43.3-7.3-64 0zM512 144c0 20.1 9.5 39.1 25.6 51.2l25.6 19.2c8.1 6 12.8 15.5 12.8 25.6l0 240c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
        <path d="M178.2 112.9C194.5 81.6 226.7 64 260.2 64l119.5 0c33.5 0 65.8 17.6 82.1 48.9C489.5 165.8 544 282.2 544 384l0 17c0 43.6-35.4 79-79 79c-15.1 0-30.1-2.7-44.2-8l-67.1-25.2c-21.7-8.2-45.7-8.2-67.4 0L219.2 472c-14.1 5.3-29.1 8-44.2 8c-43.6 0-79-35.4-79-79l0-17c0-101.8 54.5-218.2 82.2-271.1zM260.2 128c-11.4 0-20.8 5.9-25.3 14.5C207.2 195.6 160 299.4 160 384l0 17c0 8.3 6.7 15 15 15c7.4 0 14.8-1.3 21.7-3.9l67.1-25.2c36.2-13.6 76.1-13.6 112.4 0l67.1 25.2c7 2.6 14.3 3.9 21.7 3.9c8.3 0 15-6.7 15-15l0-17c0-84.6-47.2-188.4-74.9-241.5c-4.5-8.6-13.9-14.5-25.3-14.5l-119.5 0z" />
    </Icon>
);

export default SkeletonRibs;