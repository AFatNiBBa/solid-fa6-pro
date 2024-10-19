
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-list` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-list?s=solid temperature-list}
 * @preview ![temperature-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMzIyLjg3NVYxNjBDMTYwIDE1MS4yNSAxNTIuNzUgMTQ0IDE0NCAxNDRTMTI4IDE1MS4yNSAxMjggMTYwVjMyMi44NzVDMTA5LjM3NSAzMjkuNSA5NiAzNDcuMTI1IDk2IDM2OEM5NiAzOTQuNSAxMTcuNSA0MTYgMTQ0IDQxNlMxOTIgMzk0LjUgMTkyIDM2OEMxOTIgMzQ3LjEyNSAxNzguNjI1IDMyOS41IDE2MCAzMjIuODc1Wk0yNTYgMTEyQzI1NiA1MC4xMjUgMjA1Ljg3NSAwIDE0NCAwUzMyIDUwLjEyNSAzMiAxMTJWMjc4LjVDMTIuMjUgMzAzLjI1IDAgMzM0IDAgMzY4QzAgNDQ3LjUgNjQuNSA1MTIgMTQ0IDUxMlMyODggNDQ3LjUgMjg4IDM2OEMyODggMzM0IDI3NS43NSAzMDMuMTI1IDI1NiAyNzguNVYxMTJaTTE0NCA0NDhDOTkuODc1IDQ0OCA2NCA0MTIuMTI1IDY0IDM2OEM2NCAzNDIuNSA3Ni4yNSAzMTkuMTI1IDk2IDMwNC4yNVYxMTJDOTYgODUuNSAxMTcuNSA2NCAxNDQgNjRTMTkyIDg1LjUgMTkyIDExMlYzMDQuMjVDMjExLjc1IDMxOSAyMjQgMzQyLjUgMjI0IDM2OEMyMjQgNDEyLjEyNSAxODguMTI1IDQ0OCAxNDQgNDQ4Wk0zNTIgOTZINDgwQzQ5Ny42NzQgOTYgNTEyIDgxLjY3NCA1MTIgNjRTNDk3LjY3NCAzMiA0ODAgMzJIMzUyQzMzNC4zMjYgMzIgMzIwIDQ2LjMyNiAzMjAgNjRTMzM0LjMyNiA5NiAzNTIgOTZaTTQ4MCAxNjBIMzUyQzMzNC4zMjYgMTYwIDMyMCAxNzQuMzI2IDMyMCAxOTJTMzM0LjMyNiAyMjQgMzUyIDIyNEg0ODBDNDk3LjY3NCAyMjQgNTEyIDIwOS42NzQgNTEyIDE5MlM0OTcuNjc0IDE2MCA0ODAgMTYwWk00ODAgMjg4SDM4NEMzNjYuMzI2IDI4OCAzNTIgMzAyLjMyNiAzNTIgMzIwUzM2Ni4zMjYgMzUyIDM4NCAzNTJINDgwQzQ5Ny42NzQgMzUyIDUxMiAzMzcuNjc0IDUxMiAzMjBTNDk3LjY3NCAyODggNDgwIDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TemperatureList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160 322.875V160C160 151.25 152.75 144 144 144S128 151.25 128 160V322.875C109.375 329.5 96 347.125 96 368C96 394.5 117.5 416 144 416S192 394.5 192 368C192 347.125 178.625 329.5 160 322.875ZM256 112C256 50.125 205.875 0 144 0S32 50.125 32 112V278.5C12.25 303.25 0 334 0 368C0 447.5 64.5 512 144 512S288 447.5 288 368C288 334 275.75 303.125 256 278.5V112ZM144 448C99.875 448 64 412.125 64 368C64 342.5 76.25 319.125 96 304.25V112C96 85.5 117.5 64 144 64S192 85.5 192 112V304.25C211.75 319 224 342.5 224 368C224 412.125 188.125 448 144 448ZM352 96H480C497.674 96 512 81.674 512 64S497.674 32 480 32H352C334.326 32 320 46.326 320 64S334.326 96 352 96ZM480 160H352C334.326 160 320 174.326 320 192S334.326 224 352 224H480C497.674 224 512 209.674 512 192S497.674 160 480 160ZM480 288H384C366.326 288 352 302.326 352 320S366.326 352 384 352H480C497.674 352 512 337.674 512 320S497.674 288 480 288Z" />
        </Icon>
    </>
}