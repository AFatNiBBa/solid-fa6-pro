
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `screwdriver` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=solid screwdriver}
 * @preview ![screwdriver](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTcuMTI1IDI3OC42MjVMMCAzOTUuNjI1Qy0xNC41IDQxMC4yNSAtMTQuNSA0MzMuODc1IDAgNDQ4LjM3NUw1Mi43NSA1MDEuMTI1QzY3LjI1IDUxNS42MjUgOTAuODc1IDUxNS42MjUgMTA1LjUgNTAxLjEyNUwyMjIuNSAzODRDMjUxLjYyNSAzNTQuODc1IDI1MS42MjUgMzA3Ljc1IDIyMi41IDI3OC42MjVTMTQ2LjI1IDI0OS41IDExNy4xMjUgMjc4LjYyNVpNNDM3LjEyNSAwTDMwOS4xMjUgOTZWMTU4TDIyNi4xMjUgMjQxLjEyNUMyMzIuODc1IDI0NS4zNzUgMjM5LjM3NSAyNTAuMTI1IDI0NS4xMjUgMjU2QzI1MSAyNjEuNzUgMjU1Ljc1IDI2OC4yNSAyNjAgMjc1TDM0My4xMjUgMTkySDQwNS4xMjVMNTAxLjEyNSA2NEw0MzcuMTI1IDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Screwdriver(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M117.125 278.625L0 395.625C-14.5 410.25 -14.5 433.875 0 448.375L52.75 501.125C67.25 515.625 90.875 515.625 105.5 501.125L222.5 384C251.625 354.875 251.625 307.75 222.5 278.625S146.25 249.5 117.125 278.625ZM437.125 0L309.125 96V158L226.125 241.125C232.875 245.375 239.375 250.125 245.125 256C251 261.75 255.75 268.25 260 275L343.125 192H405.125L501.125 64L437.125 0Z" />
        </Icon>
    </>
}