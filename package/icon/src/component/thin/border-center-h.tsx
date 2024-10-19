
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-center-h` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-center-h?s=thin border-center-h}
 * @preview ![border-center-h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTc2QzIzMi44MjIgMTc2IDI0MCAxNjguODIgMjQwIDE2MFMyMzIuODIyIDE0NCAyMjQgMTQ0UzIwOCAxNTEuMTggMjA4IDE2MFMyMTUuMTc4IDE3NiAyMjQgMTc2Wk0zMiA0MzJDMjMuMTc4IDQzMiAxNiA0MzkuMTggMTYgNDQ4UzIzLjE3OCA0NjQgMzIgNDY0UzQ4IDQ1Ni44MiA0OCA0NDhTNDAuODIyIDQzMiAzMiA0MzJaTTMyIDgwQzQwLjgyMiA4MCA0OCA3Mi44MiA0OCA2NFM0MC44MjIgNDggMzIgNDhTMTYgNTUuMTggMTYgNjRTMjMuMTc4IDgwIDMyIDgwWk0zMiAxNzZDNDAuODIyIDE3NiA0OCAxNjguODIgNDggMTYwUzQwLjgyMiAxNDQgMzIgMTQ0UzE2IDE1MS4xOCAxNiAxNjBTMjMuMTc4IDE3NiAzMiAxNzZaTTIyNCA4MEMyMzIuODIyIDgwIDI0MCA3Mi44MiAyNDAgNjRTMjMyLjgyMiA0OCAyMjQgNDhTMjA4IDU1LjE4IDIwOCA2NFMyMTUuMTc4IDgwIDIyNCA4MFpNNDE2IDgwQzQyNC44MjIgODAgNDMyIDcyLjgyIDQzMiA2NFM0MjQuODIyIDQ4IDQxNiA0OFM0MDAgNTUuMTggNDAwIDY0UzQwNy4xNzggODAgNDE2IDgwWk00MTYgMTc2QzQyNC44MjIgMTc2IDQzMiAxNjguODIgNDMyIDE2MFM0MjQuODIyIDE0NCA0MTYgMTQ0UzQwMCAxNTEuMTggNDAwIDE2MFM0MDcuMTc4IDE3NiA0MTYgMTc2Wk0zMjAgODBDMzI4LjgyMiA4MCAzMzYgNzIuODIgMzM2IDY0UzMyOC44MjIgNDggMzIwIDQ4UzMwNCA1NS4xOCAzMDQgNjRTMzExLjE3OCA4MCAzMjAgODBaTTEyOCA4MEMxMzYuODIyIDgwIDE0NCA3Mi44MiAxNDQgNjRTMTM2LjgyMiA0OCAxMjggNDhTMTEyIDU1LjE4IDExMiA2NFMxMTkuMTc4IDgwIDEyOCA4MFpNMzIwIDQzMkMzMTEuMTc4IDQzMiAzMDQgNDM5LjE4IDMwNCA0NDhTMzExLjE3OCA0NjQgMzIwIDQ2NFMzMzYgNDU2LjgyIDMzNiA0NDhTMzI4LjgyMiA0MzIgMzIwIDQzMlpNNDE2IDQzMkM0MDcuMTc4IDQzMiA0MDAgNDM5LjE4IDQwMCA0NDhTNDA3LjE3OCA0NjQgNDE2IDQ2NFM0MzIgNDU2LjgyIDQzMiA0NDhTNDI0LjgyMiA0MzIgNDE2IDQzMlpNMzIgMzM2QzIzLjE3OCAzMzYgMTYgMzQzLjE4IDE2IDM1MlMyMy4xNzggMzY4IDMyIDM2OFM0OCAzNjAuODIgNDggMzUyUzQwLjgyMiAzMzYgMzIgMzM2Wk00MTYgMzM2QzQwNy4xNzggMzM2IDQwMCAzNDMuMTggNDAwIDM1MlM0MDcuMTc4IDM2OCA0MTYgMzY4UzQzMiAzNjAuODIgNDMyIDM1MlM0MjQuODIyIDMzNiA0MTYgMzM2Wk0xMjggNDMyQzExOS4xNzggNDMyIDExMiA0MzkuMTggMTEyIDQ0OFMxMTkuMTc4IDQ2NCAxMjggNDY0UzE0NCA0NTYuODIgMTQ0IDQ0OFMxMzYuODIyIDQzMiAxMjggNDMyWk0yMjQgMzM2QzIxNS4xNzggMzM2IDIwOCAzNDMuMTggMjA4IDM1MlMyMTUuMTc4IDM2OCAyMjQgMzY4UzI0MCAzNjAuODIgMjQwIDM1MlMyMzIuODIyIDMzNiAyMjQgMzM2Wk0yMjQgNDMyQzIxNS4xNzggNDMyIDIwOCA0MzkuMTggMjA4IDQ0OFMyMTUuMTc4IDQ2NCAyMjQgNDY0UzI0MCA0NTYuODIgMjQwIDQ0OFMyMzIuODIyIDQzMiAyMjQgNDMyWk00NDAgMjQ4SDhDMy41OTQgMjQ4IDAgMjUxLjU3OCAwIDI1NlMzLjU5NCAyNjQgOCAyNjRINDQwQzQ0NC40MDYgMjY0IDQ0OCAyNjAuNDIyIDQ0OCAyNTZTNDQ0LjQwNiAyNDggNDQwIDI0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BorderCenterH(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 176C232.822 176 240 168.82 240 160S232.822 144 224 144S208 151.18 208 160S215.178 176 224 176ZM32 432C23.178 432 16 439.18 16 448S23.178 464 32 464S48 456.82 48 448S40.822 432 32 432ZM32 80C40.822 80 48 72.82 48 64S40.822 48 32 48S16 55.18 16 64S23.178 80 32 80ZM32 176C40.822 176 48 168.82 48 160S40.822 144 32 144S16 151.18 16 160S23.178 176 32 176ZM224 80C232.822 80 240 72.82 240 64S232.822 48 224 48S208 55.18 208 64S215.178 80 224 80ZM416 80C424.822 80 432 72.82 432 64S424.822 48 416 48S400 55.18 400 64S407.178 80 416 80ZM416 176C424.822 176 432 168.82 432 160S424.822 144 416 144S400 151.18 400 160S407.178 176 416 176ZM320 80C328.822 80 336 72.82 336 64S328.822 48 320 48S304 55.18 304 64S311.178 80 320 80ZM128 80C136.822 80 144 72.82 144 64S136.822 48 128 48S112 55.18 112 64S119.178 80 128 80ZM320 432C311.178 432 304 439.18 304 448S311.178 464 320 464S336 456.82 336 448S328.822 432 320 432ZM416 432C407.178 432 400 439.18 400 448S407.178 464 416 464S432 456.82 432 448S424.822 432 416 432ZM32 336C23.178 336 16 343.18 16 352S23.178 368 32 368S48 360.82 48 352S40.822 336 32 336ZM416 336C407.178 336 400 343.18 400 352S407.178 368 416 368S432 360.82 432 352S424.822 336 416 336ZM128 432C119.178 432 112 439.18 112 448S119.178 464 128 464S144 456.82 144 448S136.822 432 128 432ZM224 336C215.178 336 208 343.18 208 352S215.178 368 224 368S240 360.82 240 352S232.822 336 224 336ZM224 432C215.178 432 208 439.18 208 448S215.178 464 224 464S240 456.82 240 448S232.822 432 224 432ZM440 248H8C3.594 248 0 251.578 0 256S3.594 264 8 264H440C444.406 264 448 260.422 448 256S444.406 248 440 248Z" />
        </Icon>
    </>
}