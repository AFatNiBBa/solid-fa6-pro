
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-bottom-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=thin border-bottom-right}
 * @preview ![border-bottom-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggODBDMTM2LjgyMiA4MCAxNDQgNzIuODIgMTQ0IDY0UzEzNi44MjIgNDggMTI4IDQ4UzExMiA1NS4xOCAxMTIgNjRTMTE5LjE3OCA4MCAxMjggODBaTTMyMCA4MEMzMjguODIyIDgwIDMzNiA3Mi44MiAzMzYgNjRTMzI4LjgyMiA0OCAzMjAgNDhTMzA0IDU1LjE4IDMwNCA2NFMzMTEuMTc4IDgwIDMyMCA4MFpNMzIgODBDNDAuODIyIDgwIDQ4IDcyLjgyIDQ4IDY0UzQwLjgyMiA0OCAzMiA0OFMxNiA1NS4xOCAxNiA2NFMyMy4xNzggODAgMzIgODBaTTIyNCA4MEMyMzIuODIyIDgwIDI0MCA3Mi44MiAyNDAgNjRTMjMyLjgyMiA0OCAyMjQgNDhTMjA4IDU1LjE4IDIwOCA2NFMyMTUuMTc4IDgwIDIyNCA4MFpNMzIgMjcyQzQwLjgyMiAyNzIgNDggMjY0LjgyIDQ4IDI1NlM0MC44MjIgMjQwIDMyIDI0MFMxNiAyNDcuMTggMTYgMjU2UzIzLjE3OCAyNzIgMzIgMjcyWk0zMiAxNzZDNDAuODIyIDE3NiA0OCAxNjguODIgNDggMTYwUzQwLjgyMiAxNDQgMzIgMTQ0UzE2IDE1MS4xOCAxNiAxNjBTMjMuMTc4IDE3NiAzMiAxNzZaTTQ0MCAzMkM0MzUuNTgyIDMyIDQzMiAzNS41ODIgNDMyIDQwVjQ0OEM0MzIgNDU2LjgzOCA0MjQuODM2IDQ2NCA0MTYgNDY0SDhDMy41ODIgNDY0IDAgNDY3LjU4MiAwIDQ3MlMzLjU4MiA0ODAgOCA0ODBINDE2QzQzMy42NzQgNDgwIDQ0OCA0NjUuNjc0IDQ0OCA0NDhWNDBDNDQ4IDM1LjU4MiA0NDQuNDE4IDMyIDQ0MCAzMlpNMzIgMzY4QzQwLjgyMiAzNjggNDggMzYwLjgyIDQ4IDM1MlM0MC44MjIgMzM2IDMyIDMzNlMxNiAzNDMuMTggMTYgMzUyUzIzLjE3OCAzNjggMzIgMzY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BorderBottomRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M128 80C136.822 80 144 72.82 144 64S136.822 48 128 48S112 55.18 112 64S119.178 80 128 80ZM320 80C328.822 80 336 72.82 336 64S328.822 48 320 48S304 55.18 304 64S311.178 80 320 80ZM32 80C40.822 80 48 72.82 48 64S40.822 48 32 48S16 55.18 16 64S23.178 80 32 80ZM224 80C232.822 80 240 72.82 240 64S232.822 48 224 48S208 55.18 208 64S215.178 80 224 80ZM32 272C40.822 272 48 264.82 48 256S40.822 240 32 240S16 247.18 16 256S23.178 272 32 272ZM32 176C40.822 176 48 168.82 48 160S40.822 144 32 144S16 151.18 16 160S23.178 176 32 176ZM440 32C435.582 32 432 35.582 432 40V448C432 456.838 424.836 464 416 464H8C3.582 464 0 467.582 0 472S3.582 480 8 480H416C433.674 480 448 465.674 448 448V40C448 35.582 444.418 32 440 32ZM32 368C40.822 368 48 360.82 48 352S40.822 336 32 336S16 343.18 16 352S23.178 368 32 368Z" />
        </Icon>
    </>
}