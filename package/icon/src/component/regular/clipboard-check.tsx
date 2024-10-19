
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clipboard-check` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=regular clipboard-check}
 * @preview ![clipboard-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDUuMTI1IDIzMy4xODhMMTcyLjYwOSAzMjUuNDY5TDEzNS42MjUgMjkzLjc4MUMxMjUuNTQ3IDI4NS4xNTYgMTEwLjM5MSAyODYuMzEyIDEwMS43ODEgMjk2LjM3NUM5My4xNTYgMzA2LjQzOCA5NC4zMTMgMzIxLjU5NCAxMDQuMzc1IDMzMC4yMTlMMTYwLjM3NSAzNzguMjE5QzE2NC43NSAzODEuOTY5IDE3MC4yOTcgMzg0IDE3NiAzODRDMTc2Ljc4MSAzODQgMTc3LjU2MiAzODMuOTY5IDE3OC4zNDQgMzgzLjg3NUMxODQuODU5IDM4My4yNSAxOTAuODI4IDM3OS45NjkgMTk0Ljg3NSAzNzQuODEzTDI4Mi44NzUgMjYyLjgxM0MyOTEuMDYzIDI1Mi40MDYgMjg5LjI1IDIzNy4zMTMgMjc4LjgyOCAyMjkuMTI1QzI2OC40MjIgMjIwLjk2OSAyNTMuMzEyIDIyMi43NSAyNDUuMTI1IDIzMy4xODhaTTMyMCA2NEgyNzAuMzg3QzI2Mi45NzMgMjcuNDg0IDIzMC43MDEgMCAxOTIgMFMxMjEuMDI3IDI3LjQ4NCAxMTMuNjEzIDY0SDY0QzI4LjY1NCA2NCAwIDkyLjY1NiAwIDEyOFY0NDhDMCA0ODMuMzQ0IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ2IDUxMiAzODQgNDgzLjM0NCAzODQgNDQ4VjEyOEMzODQgOTIuNjU2IDM1NS4zNDYgNjQgMzIwIDY0Wk0xOTIgNDhDMjA1LjIzNCA0OCAyMTYgNTguNzY2IDIxNiA3MlMyMDUuMjM0IDk2IDE5MiA5NlMxNjggODUuMjM0IDE2OCA3MlMxNzguNzY2IDQ4IDE5MiA0OFpNMzM2IDQ0OEMzMzYgNDU2LjgyIDMyOC44MjIgNDY0IDMyMCA0NjRINjRDNTUuMTc4IDQ2NCA0OCA0NTYuODIgNDggNDQ4VjEyOEM0OCAxMTkuMTggNTUuMTc4IDExMiA2NCAxMTJIODIuMjY0QzgwLjkzMiAxMTcuMTQxIDgwIDEyMi40NDEgODAgMTI4VjE0NEM4MCAxNTIuODM2IDg3LjE2NCAxNjAgOTYgMTYwSDI4OEMyOTYuODM2IDE2MCAzMDQgMTUyLjgzNiAzMDQgMTQ0VjEyOEMzMDQgMTIyLjQ0MSAzMDMuMDY4IDExNy4xNDEgMzAxLjczNiAxMTJIMzIwQzMyOC44MjIgMTEyIDMzNiAxMTkuMTggMzM2IDEyOFY0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ClipboardCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M245.125 233.188L172.609 325.469L135.625 293.781C125.547 285.156 110.391 286.312 101.781 296.375C93.156 306.438 94.313 321.594 104.375 330.219L160.375 378.219C164.75 381.969 170.297 384 176 384C176.781 384 177.562 383.969 178.344 383.875C184.859 383.25 190.828 379.969 194.875 374.813L282.875 262.813C291.063 252.406 289.25 237.313 278.828 229.125C268.422 220.969 253.312 222.75 245.125 233.188ZM320 64H270.387C262.973 27.484 230.701 0 192 0S121.027 27.484 113.613 64H64C28.654 64 0 92.656 0 128V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V128C384 92.656 355.346 64 320 64ZM192 48C205.234 48 216 58.766 216 72S205.234 96 192 96S168 85.234 168 72S178.766 48 192 48ZM336 448C336 456.82 328.822 464 320 464H64C55.178 464 48 456.82 48 448V128C48 119.18 55.178 112 64 112H82.264C80.932 117.141 80 122.441 80 128V144C80 152.836 87.164 160 96 160H288C296.836 160 304 152.836 304 144V128C304 122.441 303.068 117.141 301.736 112H320C328.822 112 336 119.18 336 128V448Z" />
        </Icon>
    </>
}