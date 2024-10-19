
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sd-cards` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sd-cards?s=thin sd-cards}
 * @preview ![sd-cards](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMEgyMjRMOTYgMTI4VjM1MkM5NiAzODcuMjUgMTI0Ljc1IDQxNiAxNjAgNDE2SDM4NEM0MTkuMjUgNDE2IDQ0OCAzODcuMjUgNDQ4IDM1MlY2NEM0NDggMjguNzUgNDE5LjI1IDAgMzg0IDBaTTQzMiAzNTJDNDMyIDM3OC40NjcgNDEwLjQ2NyA0MDAgMzg0IDQwMEgxNjBDMTMzLjUzMyA0MDAgMTEyIDM3OC40NjcgMTEyIDM1MlYxMzQuNjI3TDIzMC42MjcgMTZIMzg0QzQxMC40NjcgMTYgNDMyIDM3LjUzMyA0MzIgNjRWMzUyWk0zNDQgNDQ4QzMzOS41NzggNDQ4IDMzNiA0NTEuNTk0IDMzNiA0NTZDMzM2IDQ3OC4wNjIgMzE4LjA2MiA0OTYgMjk2IDQ5Nkg3MkM0MS4xMjUgNDk2IDE2IDQ3MC44NzUgMTYgNDQwVjE1MkMxNiAxMjkuOTM4IDMzLjkzOCAxMTIgNTYgMTEyQzYwLjQyMiAxMTIgNjQgMTA4LjQwNiA2NCAxMDRTNjAuNDIyIDk2IDU2IDk2QzI1LjEyNSA5NiAwIDEyMS4xMjUgMCAxNTJWNDQwQzAgNDc5LjY4OCAzMi4yOTcgNTEyIDcyIDUxMkgyOTZDMzI2Ljg3NSA1MTIgMzUyIDQ4Ni44NzUgMzUyIDQ1NkMzNTIgNDUxLjU5NCAzNDguNDIyIDQ0OCAzNDQgNDQ4Wk0yNDggNjRDMjQzLjU5NCA2NCAyNDAgNjcuNTk0IDI0MCA3MlYxNTJDMjQwIDE1Ni40MDYgMjQzLjU5NCAxNjAgMjQ4IDE2MFMyNTYgMTU2LjQwNiAyNTYgMTUyVjcyQzI1NiA2Ny41OTQgMjUyLjQwNiA2NCAyNDggNjRaTTMxMiA2NEMzMDcuNTk0IDY0IDMwNCA2Ny41OTQgMzA0IDcyVjE1MkMzMDQgMTU2LjQwNiAzMDcuNTk0IDE2MCAzMTIgMTYwUzMyMCAxNTYuNDA2IDMyMCAxNTJWNzJDMzIwIDY3LjU5NCAzMTYuNDA2IDY0IDMxMiA2NFpNMzc2IDY0QzM3MS41OTQgNjQgMzY4IDY3LjU5NCAzNjggNzJWMTUyQzM2OCAxNTYuNDA2IDM3MS41OTQgMTYwIDM3NiAxNjBTMzg0IDE1Ni40MDYgMzg0IDE1MlY3MkMzODQgNjcuNTk0IDM4MC40MDYgNjQgMzc2IDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SdCards(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 0H224L96 128V352C96 387.25 124.75 416 160 416H384C419.25 416 448 387.25 448 352V64C448 28.75 419.25 0 384 0ZM432 352C432 378.467 410.467 400 384 400H160C133.533 400 112 378.467 112 352V134.627L230.627 16H384C410.467 16 432 37.533 432 64V352ZM344 448C339.578 448 336 451.594 336 456C336 478.062 318.062 496 296 496H72C41.125 496 16 470.875 16 440V152C16 129.938 33.938 112 56 112C60.422 112 64 108.406 64 104S60.422 96 56 96C25.125 96 0 121.125 0 152V440C0 479.688 32.297 512 72 512H296C326.875 512 352 486.875 352 456C352 451.594 348.422 448 344 448ZM248 64C243.594 64 240 67.594 240 72V152C240 156.406 243.594 160 248 160S256 156.406 256 152V72C256 67.594 252.406 64 248 64ZM312 64C307.594 64 304 67.594 304 72V152C304 156.406 307.594 160 312 160S320 156.406 320 152V72C320 67.594 316.406 64 312 64ZM376 64C371.594 64 368 67.594 368 72V152C368 156.406 371.594 160 376 160S384 156.406 384 152V72C384 67.594 380.406 64 376 64Z" />
        </Icon>
    </>
}